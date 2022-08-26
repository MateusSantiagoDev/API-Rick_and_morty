export class userRoutes {
  constructor(controller, router) {
    this.userController = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) => this.userController.findAllController(req, res));
    this.router.get("/findbyid/:id", (req, res) => this.userController.findByIdController(req, res));
    this.router.post("/create", (req, res) => this.userController.createController(req, res));
    this.router.patch("/update/:id", (req, res) => this.userController.updateController(req, res));
    this.router.delete("/delete/:id", (req, res) => this.userController.deleteController(req, res));
    return this.router;
  }
}
