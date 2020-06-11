function apiFactory(){
        return {
                get(url, params, config) {
                        return request(url, "get", params, config);
                },
        
                post(url, params, config) {
                        return request(url, "post", params, config);
                },
        
                put(url, params, config) {
                        return request(url, "put", params, config);
                },
        
                _delete(url, params, config) {
                        return _delete(url, "put", params, config);
                },
        
                request(url, method, params, { isJson = false, timeout = 10000 }) {
                        if (DEBUG) {
                                console.log(`${method} ${url}`);
                                console.log(`params is`);
                                console.log(params);
                        }
        
                        return new Promise((resolve, reject) => {
                                $.ajax({
                                        url,
                                        type: method,
                                        data: isJson ? JSON.stringify(params) : params,
                                        contentType: isJson ? "application/json " : "application/x-www-form-urlencoded",
                                        timeout,
                                        success: resp => {
                                                if (DEBUG) {
                                                        console.log("resp is");
                                                        console.log(resp);
                                                }
        
                                                try {
                                                        resolve($.parseJSON(resp));
                                                } catch (ex) {
                                                        reject(ex);
                                                }
                                        },
                                        error: err => reject(err)
                                });
                        });
                }
        }
}


function uiComponentFactory(){
       return {
               showNotify(msg,duration){

               },
               showConfirm(title,msg,onOk,onCancel){

               },
               showDialog(title,msg){

               },
               showSpinner(){

               },
               closeSpinner(){

               }
       }
}

function validatorFactory(){
        return {
                number(){

                },
                phone(){

                },
                email(){

                },
                idNo(){

                },
        }
}