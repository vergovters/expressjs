import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
    router.get("/api/products", (request, response) => {
        if (request.signedCookies.cook && request.signedCookies.cook === "cook")
            return response.send([{ id: 123, name: "milk", price: "12$" }]);
    
        return response
            .status(403)
            .send({ msg: "Sorry. You need the correct cookie" });
    });
});

export default router;