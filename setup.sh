if [ "$1" == "" ]; then
  echo "usage:
    ./setup python3 : to run the python script
    ./setup nodejs : to run the js file
  enjoy! :)"
  exit
fi

echo "installing packages..."
sleep 1
sudo apt-get install nodejs
clear
sudo pacman -S nodejs
clear
sudo dnf install nodejs
clear
echo 'now you can run it by writing "node main.js" enjoy!'
