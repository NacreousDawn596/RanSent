if [ "$1" == "" ]; then
  echo "usage:
    ./setup python3 : to run the python script
    ./setup nodejs : to run the js file
  enjoy! :)"
  exit
fi

echo "installing packages..."
sleep 1
sudo apt-get install $1
clear
sudo pacman -S $1
clear
sudo dnf install $1
clear
if [ "$1" == "nodejs" ]; then
  echo 'now you can run it by writing "node main.js" enjoy!'
fi
if [ "$1" == "python3" ]; then
  echo 'now you can run it by writing "python3 main.py" enjoy!'
fi
