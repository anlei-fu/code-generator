Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@anlei-fu 
0
0 0 anlei-fu/instant-message Private
 Code  Issues 0  Pull requests 0  Actions  Projects 0  Security  Insights  Settings
instant-message/SRV/InstantMessaging.Client/Text/FullTextSearcher.cs
@anlei-fu anlei-fu add file
21acd0a on Aug 2
244 lines (196 sloc)  7.28 KB
    
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace InstantMessaging.Client.Text
{
    /// <summary>
    /// 单字符分词 全文检索 算法
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public  class FullTextSearcher<T>
    {
        private Dictionary<int, T> _itemMap = new Dictionary<int, T>();
        private Dictionary<char, Dictionary<int ,int>> _keyMap = new Dictionary<char, Dictionary<int,int>>();
        private Dictionary<char, Dictionary<int, int>> _chineseMap = new Dictionary<char, Dictionary<int, int>>();
        private HashSet<string> _constraint = new HashSet<string>();
        private int _id=0;
        public IEnumerable<T> Search(string keywords)
        {
            var scoreItems = new Dictionary<int, Dictionary<char, int>>();

            Dictionary<char, Dictionary<int, int>> map;

            if ( chooseChineseModel(keywords))//选择字典 根据汉字的数量选择
            {
                map = _chineseMap;
            }
            else
            {
                map = _keyMap;
                keywords = LanguageFileter.ChineseToPinyinCharArray(LanguageFileter.TraditonalToSimplifyChinese(keywords)).ToLower();
            }

            //计算 倒排权重
            foreach (var item in keywords)
            {
                if(map.ContainsKey(item))
                {
                    foreach (var keyItem in map[item])
                    {
                        if (!scoreItems.ContainsKey(keyItem.Key))
                            scoreItems.Add(keyItem.Key, new Dictionary<char, int>());

                        if (!scoreItems[keyItem.Key].ContainsKey(item))
                            scoreItems[keyItem.Key].Add(item, keyItem.Value);
                        else
                            scoreItems[keyItem.Key][item] += keyItem.Value;

                    }
                }
            }

            var result = new T[scoreItems.Count];

            KeyValuePair<int, float>[] scores =new KeyValuePair<int, float>[result.Length];

            var t = 0;

            //打分
            foreach (var item in scoreItems)
            {
                KeyValuePair<char, int>[] temp = new KeyValuePair<char, int>[item.Value.Count];

                var k = 0;
                foreach (var item1 in scoreItems[item.Key])
                {
                    temp[k] = item1;
                    ++k;
                }

                scores[t] = new KeyValuePair<int, float>(item.Key, score(keywords, item.Key, temp, map));
                ++t;
            }

            //排序
            Array.Sort(scores, (x, y) => y.Value.CompareTo(x.Value));

            for (int i = 0; i < scores.Length; i++)
            {
                result[i] = _itemMap[scores[i].Key];
            }

            return result;

        }

        public void Add(IEnumerable<string> patters, T item)
        {
             var  id = ++_id;
            _itemMap.Add(id, item);

            foreach (var name in patters)
            {
                if (string.IsNullOrEmpty(name))
                    continue;

                createChineseIndex(name, id);
                var temp = LanguageFileter.ChineseToPinyinCharArray( LanguageFileter.TraditonalToSimplifyChinese(name)).ToLower();
                createIndex(temp, id);
                
            }
        }
        private bool chooseChineseModel(string keywords)
        {
            var t = 0;

            foreach (var item in keywords)
            {
                if (isChinese(item))
                    ++t;
            }

            return t>keywords.Length-t;
        }
        private bool isChinese(char ch)
        {
            return Regex.IsMatch(ch.ToString(), "^[\u4e00-\u9fa5]+$");
        }

       
       
        private void createIndex(string name,int id)
        {

            foreach (var item in name)
            {
                if (!_keyMap.ContainsKey(item))
                    _keyMap.Add(item, new Dictionary<int, int>());

                if (!_keyMap[item].ContainsKey(id))
                    _keyMap[item].Add(id, 0);

                _keyMap[item][id]++;
            }

        }
        private void createChineseIndex(string name,int id)
        {
            foreach (var item in name)
            {
                if (isChinese(item))
                {
                    if (!_chineseMap.ContainsKey(item))
                        _chineseMap.Add(item, new Dictionary<int, int>());

                    if (!_chineseMap[item].ContainsKey(id))
                        _chineseMap[item].Add(id, 0);

                    _chineseMap[item][id]++;
                }
            }
        }

        /// <summary>
        ///  score=coord(q,d)*quernorm*sum(tf*idf*idf*boost*norm); lucene 
        /// 位置 关系 没有得到很好地打分
        /// </summary>
        /// <param name="keywords">关键字</param>
        /// <param name="id"></param>
        /// <param name="sub">包含的字符和权重</param>
        /// <param name="map"></param>
        /// <returns></returns>
        private float score(string keywords,int id, KeyValuePair<char,int>[] sub,Dictionary<char,Dictionary<int,int>> map)
        {

            float sum = 0f;

            foreach (var item in sub)
            {
                sum += getTf(item.Value) * getIdf(map[item.Key].Count, _itemMap.Count) * getIdf(map[item.Key].Count, _itemMap.Count) /** getNorm(item[id].Length)*/;
            }


            var result = sum * getCoord(keywords.Length, sub.Length);

            Console.WriteLine(_itemMap[id]);
            Console.WriteLine("sum:"+ sum);
            Console.WriteLine($"count:" + sub.Length);
            Console.WriteLine("result:" + result);
            Console.WriteLine();
            Console.WriteLine("*********************");

            return result;
           

        }

        /// <summary>
        /// 关键词 命中 权重
        /// </summary>
        /// <param name="total"></param>
        /// <param name="hit"></param>
        /// <returns></returns>
        private  float getCoord(int total,int hit )
        {
            return hit / (float)total;
        }

        /// <summary>
        /// 文档权重 全部置为一
        /// </summary>
        /// <returns></returns>
        private float queryNorm(int id)
        {
            return 1.0f;
        }

        /// <summary>
        /// 关键词在文档出现的频率
        /// </summary>
        /// <param name="count"></param>
        /// <returns></returns>
        private float  getTf(int count)
        {
            return (float)Math.Sqrt(count);
        }

        /// <summary>
        /// 包含 关键词 文档 占总文档的 权重
        /// 越小 得到权重越高
        /// </summary>
        /// <param name="freq"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        private float getIdf(int freq, int count)
        {
            return (float)(Math.Log(count / (double)(freq + 1)) + 1.0);
        }
        /// <summary>
        /// 文档 长度 权重 ，越短权重越高
        /// </summary>
        /// <param name="count"></param>
        /// <param name="hit"></param>
        /// <returns></returns>
        private float getNorm(int length)
        {
            return (float)(1.0 / Math.Sqrt(length));
        }




    }
}
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
