function hasCollided(a,b){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true
}

return false;

}