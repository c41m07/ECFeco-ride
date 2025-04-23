FROM php:8.2.28-apache

RUN a2enmod rewrite

RUN apt update -y && apt upgrade -y && apt install sudo libzip-dev zip libicu-dev libpng-dev libxslt-dev -y

# Install Composer CLI
RUN curl -sS https://getcomposer.org/installer | php -- \
    && mv composer.phar /usr/local/bin/composer

# Symfony CLI
RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash && sudo apt install symfony-cli -y

# Install npm and yarn
RUN sudo apt install nodejs npm -y && npm install --global yarn

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
RUN sudo apt-get install -y nodejs


RUN docker-php-ext-install pdo mysqli pdo_mysql zip gd xsl

RUN docker-php-ext-configure intl && docker-php-ext-install intl

RUN docker-php-ext-configure opcache && docker-php-ext-install opcache

COPY apache.conf /etc/apache2/sites-enabled/000-default.conf

COPY php.ini /usr/local/etc/php/php.ini

WORKDIR /var/www/html/
CMD ["apache2-foreground"]