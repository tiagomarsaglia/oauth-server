FROM php:7.4-apache

USER root

LABEL maintainer="Weslen Teche"

WORKDIR /var/www/html

# install system dependencies
RUN apt-get update && apt-get install -y \
    curl

# install php extensions
RUN docker-php-ext-install \
    pdo_mysql

# copy vhost
COPY .docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

EXPOSE 80
