import { Request } from "express";
import multer from "multer";
import crypto from 'crypto'
import path from "path";
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

const generateName = (originalName: string, hash: string) => {
  originalName = originalName.split(' ').join('_');
  return `${hash}-${originalName}`
}

const storageTypes = {

  // Configuração para salvar localmente
  local: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'uploads'))
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
            if(err) cb(err, 'Error')

            const fileName = generateName(file.originalname, hash.toString('hex'));

            cb(null, fileName);
        });
    }
}),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
            if(err) cb(err, 'Error')

            const fileName = generateName(file.originalname, hash.toString('hex'));

            cb(null, fileName);
        });
    }
}),
};

const config = {
  destination: path.join(__dirname, "..", "..", "uploads"),

  // Caso esteja em ambiente de desenvolvimento e queira salvar as imagens
  // localmente, adicione a variável DEV_PORT no diretório .env. Caso contrário,
  // o multer tentará salvar as imagens na AWS.
  storage: process.env.DEV_PORT ? storageTypes.local : storageTypes.s3,

  // 2mb
  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const allowedMines = ["image/jpeg", "image/pjpeg", "image/png"];

    if (allowedMines.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};

export const upload = multer(config)
