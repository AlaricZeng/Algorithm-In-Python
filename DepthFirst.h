#ifndef DEPTHFIRST_H_
#define DEPTHFIRST_H_
#include <list>
#include <iostream>

class Nodes
{
private:
	int iNodeNum;
	std::list<int>* iAdj;
	bool* TracedNode;
public:
	Nodes(int);
	bool AddAdj(int, int);
	void DepthFirstSearch(int);
};

#endif