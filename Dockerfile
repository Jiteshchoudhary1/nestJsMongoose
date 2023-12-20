FROM node:19.0.0 
WORKDIR /ecomerce
COPY . /ecomerce/
RUN npm install 
RUN npm run build
RUN ls -ltr -a
EXPOSE 3000
CMD ["node", "dist/main"]
