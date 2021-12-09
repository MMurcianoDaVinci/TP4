class Http {
    // Sigleton
    static instance = new Http();
    get = async(url) => {
        try{
            let req = await fetch(url);
            let json = await req.json();
            return json;
        }catch(err){
            console.log(err, "Error api");
            throw Error (err);
        }
    }
}

export default Http;