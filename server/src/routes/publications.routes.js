import { Router } from "express";
import { setUser } from "../middlewares/setUser.js";
import { upload } from "../middlewares/multer.js";
import { compressionMiddleware } from "../../../../shared/middlewares/compressor.middleware.js";
import {
  createPublication,
  deletePublication,
  getAllPublications,
  getMyPublications,
  getPublicationDetails,
} from "../controllers/publication.controller.js";
const router = Router();

router.post(
  "/create-publication",
  upload.single("publication_pdf"),
  compressionMiddleware,
  setUser,
  createPublication
);
router.get("/publication-list", getAllPublications);
router.get("/:publicationid", getPublicationDetails);
router.delete("/delete/:publicationid", setUser, deletePublication);
router.post("/get-my-publications", setUser, getMyPublications);

export default router;
