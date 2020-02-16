#!/bin/bash

cd "$(dirname -- "$0")"

get() {
    echo "$1"
    if [ -z "$2" ]; then
        curl -#RLO "$1"
    else
        curl -#RLo "$2" "$1"
    fi
}

get https://github.com/sinfo/ng-sinfo-webapp/raw/cb545ab469e1eb3d2224ad028bf6fa02141e43a6/src/assets/img/logo-branco2.png sinfo.png

get https://www.xpand-it.com/wp-content/uploads/2018/08/LogoXray-V-3.png xray.png
get https://www.xpand-it.com/wp-content/uploads/2018/08/LogoXporter-V-1.png xporter.png

get https://github.com/nodejs/nodejs.org/raw/863043716aef43f9738a63140d6f31c83a0c5682/static/images/logos/nodejs-new-pantone-black.svg nodejs.svg
get https://github.com/facebook/create-react-app/raw/4c0c81953d090dbf122e126f2b6b8c803d4a0569/packages/cra-template/template/src/logo.svg react.svg
get https://github.com/webpack/media/raw/fd2b8ee77179061b6a0647bf98fd3f9c3acde681/logo/icon.svg webpack.svg
get https://github.com/kubernetes/kubernetes/raw/3eec0a9a470a34de1fe89c2f6a24e1eabd22a60d/logo/logo.svg kubernetes.svg
get https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png docker.png
get https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg aws.svg
