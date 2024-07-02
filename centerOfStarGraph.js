/*
1791. Find Center of Star Graph

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

 

Example 1:


Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
 

Constraints:

3 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
The given edges represent a valid star graph.
*/
/*
{
    const edges = [
        [1,2],
        [2,3],
        [4,2]
    ]
  const edges1 =   [[1,2],[5,1],[1,3],[1,4]]
    function findCenterOfStarGraph(nums){
        if(!nums.length) return null
        if(nums.every(elem=> !elem.length >=2)) return null
        let [ui,vi] = nums[0]
       let x = nums.every(elem=> elem.includes(ui))
       let y = nums.every(elem=> elem.includes(vi))
       return x ? ui : y ? vi : null
       
    }
    let res = findCenterOfStarGraph(edges)
    console.log(res)

}
    */


{ // this will check only 2 starting array
  
    function findCenterOfStarGraph(nums){
        if(!nums.length) return
        let [u1,v1] = nums[0]
        let [u2,v2] =  nums[1]
        if(u1 === u2 || u1 === v2) return u1
        return v2
    }
}

{
    const findCenter = nums => {
        const count = {}
        for ([u,v] of nums){
            count[u] = (count[u] || 0)+1
            count[v] = (count[v] || 0)+1
            if(count[u] >1) return u
            if(count[v] >1) return v
        } 
        return -1
    }
}