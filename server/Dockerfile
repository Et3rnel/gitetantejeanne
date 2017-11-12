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

EXPOSE 3000

# The cmd to be run when docker run
CMD [ "npm", "start" ]