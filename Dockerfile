# Build with Jekyll on a first container
FROM node:8
RUN apt update -y && apt install ruby-full -y
RUN gem install bundler

COPY . /docs
WORKDIR /docs
RUN bundle install

RUN npm install
CMD npm run dev
