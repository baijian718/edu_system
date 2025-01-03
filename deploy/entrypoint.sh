chmod +x deploy/nginx.conf && sed -i 's#{ENV_PORT}#'"${PORT}"'#g; s#{HEROKU_HOME}#'"${PWD}"'#g' deploy/nginx.conf && heroku-php-nginx -c deploy/nginx.conf
