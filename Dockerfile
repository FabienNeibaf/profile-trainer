FROM ruby:2.7.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client npm
RUN npm install -g yarn
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install

COPY package.json /app/package.json
COPY yarn.lock /myapp/yarn.lock
RUN yarn install

COPY . /app

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5000
