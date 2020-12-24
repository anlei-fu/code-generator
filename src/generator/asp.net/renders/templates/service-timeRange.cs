            var st = CommFun.ToDateTime(nvc["st"], DateTime.Now).Value.AddMonths(-1).ToString("yyyy-MM-dd");
            var et = CommFun.ToDateTime(nvc["et"], DateTime.Now).Value.AddDays(1).ToString("yyyy-MM-dd");
            entity.AddData("ST", st);
            entity.AddData("ET", et);