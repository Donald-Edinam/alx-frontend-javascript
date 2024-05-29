export default function (success){
    return new Promise((resolve, reject) => {
        
        success_object = {
            status: 200, 
            body: "Success"
        }

        if(success === true){
            resolve(success_object)
        }
        else{
            reject(Error("This fake API is not working currently"));
        }
    })
}