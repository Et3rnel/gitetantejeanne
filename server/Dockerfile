# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:9.0.0

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Install all dependencies of the current project.
COPY package.json package.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Launch the server with nodemon
RUN npm start

EXPOSE 5000