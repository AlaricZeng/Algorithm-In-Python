#include <iostream>
#include "DepthFirst.h"
using namespace std;

int main()
{
	Nodes graphic = Nodes(4);
	graphic.AddAdj(0, 1);
	graphic.AddAdj(0, 2);
	graphic.AddAdj(1, 2);
	graphic.AddAdj(2, 0);
	graphic.AddAdj(2, 3);
	graphic.AddAdj(3, 3);
	graphic.DepthFirstSearch(2);
	return 0;
}