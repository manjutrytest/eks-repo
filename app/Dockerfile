FROM node:18-alpine
WORKDIR /app
COPY app/package.json ./
RUN npm install --production
COPY app/ ./
ENV PORT=8080
EXPOSE 8080
CMD ["npm","start"]
