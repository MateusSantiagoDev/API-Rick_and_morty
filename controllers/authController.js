export class authController{
    constructor(findEmailUser, bcryptHelp, jwtHelp){
        this.findEmailUser = findEmailUser;
        this.bcryptHelp = bcryptHelp;
        this.jwtHelp = jwtHelp;
    }
    async login(req, res){
        try{
            const {email, password} = req.body;
        const userHash = await this.findEmailUser.execute(email);
        const passwordValid = this.bcryptHelp.comparePasword(password, userHash.password);
        if(!passwordValid){
            throw new Error("invalid password");
        }

         const data = {            
            email: userHash.email,
            password: userHash.password,
         }
          
          res.status(200).send(this.jwtHelp.tokenGenerator(data));
        } catch (err){
            res.status(401).send(err.message)
        }
        
    }
}