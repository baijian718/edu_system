sed -i 's#{ENV_PORT}#'"${PORT}"'#g; s#{HEROKU_HOME}#'"${PWD}"'#g' nginx.conf && heroku-php-nginx -c nginx.conf
