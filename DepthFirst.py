class Graphics:
	def __init__(self, NodeNum):
		self.NodeNum = NodeNum
		self.Adj = [[] for i in range(NodeNum)]
		self.TracedNodes = [False] * NodeNum

	def addAdj(self, current, next):
		self.Adj[current].append(next)

	def DepthFirstSearch(self, current):
		self.TracedNodes[current] = True
		print(" %d" % current)
		for item in self.Adj[current]:
			if self.TracedNodes[item] == False:
				self.DepthFirstSearch(item)

newGraphics = Graphics(4)
newGraphics.addAdj(0, 1)
newGraphics.addAdj(0, 2)
newGraphics.addAdj(1, 2)
newGraphics.addAdj(2, 0)
newGraphics.addAdj(2, 3)
newGraphics.addAdj(3, 3)
newGraphics.DepthFirstSearch(2)


