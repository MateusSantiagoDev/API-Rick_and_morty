export class characterRoutes {
  constructor(controller, router) {
    this.characterController = controller;
    this.router = router;
  }

  route() {
    this.router.get("/all-characters", (req, res) => this.characterController.findAllController(req, res));
    this.router.get("/findbyid-character/:id", (req, res) => this.characterController.findByIdController(req, res));
    this.router.get("/search", (req, res) => this.characterController.finByNameCharacter(req, res));
    this.router.post("/create-character/:id", (req, res) => this.characterController.createController(req, res));
    this.router.patch("/update-character/:id", (req, res) => this.characterController.updateController(req, res));
    this.router.delete("/delete-character/:id", (req, res) => this.characterController.deleteController(req, res));   
    return this.router; 
  }
}
