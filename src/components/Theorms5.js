import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import kmeans from '../resources/5.1_candidates_vs_allpoints.png'
// import sklearn from '../resources/sklearn_agglomerative_clustering.png'

function Theorms5() {
    const pythonCode = `class DetectNiceClustering():
    def __init__(self, k):
        self.k = k

    def Candidates(self, S):
        # S is set of points in X
        # run single linkage on S to get a tree
        # assign each leaf node the corresponding data point
        # move bottom-up, assign each internal node the datapoint in one of its children
        # return all points at a depth < k from the root
        self.points = []
        S = np.array(S)
        Z = linkage(S, method='single', metric='euclidean')
        self.merges = Z[:, :2].astype(int)
        datasize = len(S)
        # list of internal nodes
        self.internal_assignment = [i for i in range(0, datasize)]
        for i in range(0, len(self.merges)):
            self.internal_assignment.append(self.internal_assignment[self.merges[i][0]])
        self.traverse(
            self.merges[-1][0],
            self.merges[-1][1],
            self.k - 1,
            datasize
        )
        return S[self.points]

    def traverse(self, p1, p2, k, datasize):
        if k == 1:
            # if k==1, add the children
            self.points.append(self.internal_assignment[p1])
            self.points.append(self.internal_assignment[p2])
            return
        if p1 < datasize:
            # if p1 is a leaf, add it
            self.points.append(self.internal_assignment[p1])
        else:
            # else, traverse the tree
            self.traverse(
                self.merges[p1-datasize][0],
                self.merges[p1-datasize][1],
                k - 1,
                datasize
            )
        if p2 < datasize:
            # if p2 is a leaf, add it
            self.points.append(self.internal_assignment[p2])
        else:
            # else, traverse the tree
            self.traverse(
                self.merges[p2-datasize][0],
                self.merges[p2-datasize][1],
                k - 1,
                datasize
            )

    def detect_niceness(self, X):
        self.T = []
        self.T.append([]) # T[0] is empty
        datasize = len(X)
        flag = True
        for t in range(1, datasize):
            xt = X[t]
            self.T.append(self.T[t-1] + [xt])
            if len(self.T[t]) > 2**(self.k-1):
                self.T[t] = self.Candidates(self.T[t])
            if len(self.T[t]) > 2**(self.k-1):
                flag = False
                break
        if flag:
            print(f"Nice {self.k}-clustering detected")
        else:
            print(f"Nice {self.k}-clustering not detected")`;

    return (

        <div className='m-5 p-3 intro-container bg-light '
            style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'pointer', // Optional: Add a pointer cursor to indicate interactivity
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'scale(1)';
            }}>

            <h2> Incremental Clustering with Extra Clusters</h2>

            <p>
                In the pursuit of efficient clustering algorithms, a shift in perspective reveals new possibilities for
                incremental methods. The key lies in uncovering not the exact target partition but a refinement of it. Let's
                delve into the insights and results that showcase the enhanced capabilities of these methods.
            </p>

            <h3>Refinement of Clustering</h3>
            <p>
                Formally, a clustering C of X is a refinement of clustering C<sub>0</sub> of X if x ∼ C y implies x ∼ C<sub>0</sub> y
                for all x, y ∈ X. This shift in focus allows for more flexibility and opens the door to novel incremental
                approaches.
            </p>

            <h3>Finding Refinement with Extra Centers</h3>
            <p>
                <strong>Lemma 5.1:</strong> Suppose S has a nice `-clustering, for ` ≤ k. Then the points returned by CANDIDATES(S)
                include at least one representative from each of these clusters.
            </p>

            <h3>Algorithm for Incremental Clustering</h3>
            <p>
                <strong>Algorithm 5.2: Incremental Clustering with Extra Centers</strong>
                <br />
                T<sub>0</sub> = ∅
                <br />
                For t = 1, 2, . . .:
                <br />
                - Receive x<sub>t</sub> and set T<sub>t</sub> = T<sub>t−1</sub> ∪ {'{'}x<sub>t</sub>{'}'}
                <br />
                - If |T<sub>t</sub>| {">"} 2<sup>k−1</sup>: T<sub>t</sub> ← CANDIDATES(T<sub>t</sub>)
            </p>


            <div className='container  d-flex justify-content-center align-items-center border bg-dark rounded '>
                <pre>
                   <SyntaxHighlighter language="python">
                    {pythonCode}
                </SyntaxHighlighter>
                </pre>
            </div>
            <div className='d-flex justify-content-center align-items-center' >
                <img className='pt-4 pb-4' src={kmeans} alt="kmeans" />
                {/* <img className='p-4' src={sklearn} alt="sklearn" /> */}

            </div>

            <h3>Results and Guarantees</h3>
            <p>
                <strong>Theorem 5.3:</strong> Suppose there is a nice k-clustering C of X. Then for each t, the set T<sub>t</sub> has at most
                2<sup>k−1</sup> points, including at least one representative from each C<sub>i</sub> for which C<sub>i</sub> ∩ {'{'}x<sub>1</sub>, . . . , x<sub>t</sub>{'}'} =
                ∅.
            </p>

            <p>
                <strong>Theorem 5.4:</strong> It is not possible in general to use fewer centers. Pick any incremental clustering algorithm
                that maintains a list of ` centers guaranteed to be consistent with a target nice k-clustering. Then ` ≥ 2<sup>k−1</sup>.
            </p>

            <p>
                These results illuminate the power of incremental clustering when equipped with extra centers, offering a refined
                approach to uncovering cluster structures.
            </p>

        </div >
    )
}

export default Theorms5