#!/bin/bash

cd $1

if [ -z "$1" ]
then
    echo "Usage: Parameter is empty"
else
    echo "Installation des dépendances NPM"

    npm install

    echo "Installation de Boostrap"

    npm install bootstrap --save && npm install jquery --save
fi;
