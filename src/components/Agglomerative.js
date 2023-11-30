import React from 'react'
import kmeans from '../resources/online_nearest-neighbors_clustering.png'
import sklearn from '../resources/sklearn_nearest-neighbors_clustering.png'
// import kmeanvideo from '../resources/k-means_video.mp4'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles.css';


function Agglomerative() {
    const pythonCode = `class OnlineNrstNbr:
    def __init__(self, k, random_state=42):
        self.k = k
        self.centroids = None
        self.cluster_counts = None
        np.random.seed(random_state)

    def fit(self, X):
        self.centroids = X[np.random.choice(X.shape[0], self.k, replace=False)]
        self.cluster_counts = np.ones(self.k)

    def update(self, new_point):
        # add point as new cluster
        self.centroids = np.vstack([self.centroids, new_point])
        self.cluster_counts = np.append(self.cluster_counts, 1)

        # calculate distance between every pair of clusters
        # store the pair of centroids with smallest distance
        # replace the two centroids with one of them
        # repeat until k clusters remain
        while len(self.centroids) > self.k:
            cluster_distances = np.zeros((len(self.centroids), len(self.centroids)))
            for i in range(len(self.centroids)):
                for j in range(len(self.centroids)):
                    cluster_distances[i, j] = np.sqrt(np.sum((self.centroids[i] - self.centroids[j])**2))
            np.fill_diagonal(cluster_distances, np.inf) # set diagonal to infinity so we don't merge a cluster with itself
            c1, c2 = np.unravel_index(cluster_distances.argmin(), cluster_distances.shape) # find the indices of the smallest distance
            # calculate distance of new point to c1 and c2
            c1_dist = np.sqrt(np.sum((new_point - self.centroids[c1])**2))
            c2_dist = np.sqrt(np.sum((new_point - self.centroids[c2])**2))
            # merge the cluster with the smaller distance to the new point
            if c1_dist < c2_dist:
                c_parent = c1
                c_daughter = c2
            else:
                c_parent = c2
                c_daughter = c1
            # move points from more_points to fewer_points
            self.cluster_counts[c_parent] += self.cluster_counts[c_daughter]
            self.cluster_counts = np.delete(self.cluster_counts, c_daughter, axis=0)
            self.centroids = np.delete(self.centroids, c_daughter, axis=0)

    def plot_clusters(self, X):
        plt.scatter(X[:, 0], X[:, 1], c=np.argmin(np.linalg.norm(X[:, np.newaxis] - self.centroids, axis=2), axis=1), cmap='viridis')
        plt.title("Online Nearest Neighbors Clustering")
        plt.xlabel("Sepal Length (cm)")
        plt.ylabel("Sepal Width (cm)")

        # Plot the cluster centers
        plt.scatter(self.centroids[:, 0], self.centroids[:, 1], c='red', s=200, label='Cluster Centers')
        plt.legend()
        plt.show()`;

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
            <h2>Sequential Nearest neighbour clustering.</h2>
            <h3>Incremental Nearest neighbour Clustering</h3>

            <h5>Algorithm 2.3: Sequential Agglomerative Clustering</h5>
            <p className='container d-flex justify-content-center align-items-center'>
                <p>
                    <strong>Set T to the first k data points</strong>
                    <br />
                    <strong>Repeat:</strong>
                    <br />
                    1. Get the next point x and add it to T
                    <br />
                    2. Let t, t' be the two closest points in T
                    <br />
                    3. Replace t, t' by either of these two points
                </p>

            </p>



            <div className='container  d-flex justify-content-center align-items-center border bg-dark rounded '>
                <pre>
                <SyntaxHighlighter language="python">
                    {pythonCode}
                </SyntaxHighlighter>
                </pre>
            </div>
            <div className='d-flex' >
                <img className='pt-4 pb-4' src={kmeans} alt="kmeans" />
                <img className='p-4' src={sklearn} alt="sklearn" />

            </div>
            {/* <div className='container  d-flex justify-content-center align-items-center '>
                <video width="640" height="740" controls>
                    <source src={kmeanvideo} type="video/mp4" />
                </video>
            </div> */}
        </div>
    )
}

export default Agglomerative