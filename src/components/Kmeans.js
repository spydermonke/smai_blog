import React from 'react'
import kmeans from '../resources/online_k-means_clustering.png'
import sklearn from '../resources/sklearn_k-means_clustering.png'
import kmeanvideo from '../resources/k-means_video.mp4'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles.css';

function Kmeans() {
    const pythonCode = `class OnlineKMeans:
    def __init__(self, k, random_state=42):
        self.k = k
        self.centroids = None
        self.cluster_counts = None
        np.random.seed(random_state)

    def fit(self, X):
        self.centroids = X[np.random.choice(X.shape[0], self.k, replace=False)]
        self.cluster_counts = np.ones(self.k)

    def update(self, new_point):
        cluster_distances = np.zeros(self.k)
        for cluster in range(self.k):
            cluster_distances[cluster] = np.sqrt(np.sum((new_point - self.centroids[cluster])**2))
        c = np.argmin(cluster_distances)
        self.cluster_counts[c] += 1
        self.centroids[c] += 1.0 / self.cluster_counts[c] * (new_point - self.centroids[c])

    def plot_clusters(self, X):
        plt.scatter(X[:, 0], X[:, 1], c=np.argmin(np.linalg.norm(X[:, np.newaxis] - self.centroids, axis=2), axis=1), cmap='viridis')
        plt.title("Online K-Means Clustering")
        plt.xlabel("Sepal Length (cm)")
        plt.ylabel("Sepal Width (cm)")

        # Plot the cluster centers
        plt.scatter(self.centroids[:, 0], self.centroids[:, 1], c='red', s=200, label='Cluster Centers')
        plt.legend()
        plt.show()`;

  return (
    <div  className='m-5 p-3 intro-container bg-light '
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
        <h2>Sequential k-means Incremental Clustering</h2>
        <h3>Incremental k-Means Clustering</h3>
      <p>
        Incremental k-means clustering is an extension of the traditional k-means clustering algorithm designed to accommodate dynamic datasets where new observations are continuously added over time. Unlike the batch processing nature of standard k-means, incremental k-means allows for the seamless integration of new data points into existing clusters without the need to recompute the entire clustering solution.
      </p>

      <h4>Process of Incremental k-Means:</h4>
      <ol>
        <li>
          <strong>Initialization:</strong> Begin with an initial set of clusters and centroids. This initialization step is often performed by applying the standard k-means algorithm to a representative subset of the data.
        </li>
        <li>
          <strong>Adding New Data:</strong> As new data points become available, they are incrementally incorporated into the existing clusters, allowing the clustering model to evolve dynamically.
        </li>
        <li>
          <strong>Assignment and Update:</strong> Each new data point is assigned to the nearest cluster based on the current centroids. Subsequently, the centroids of the affected clusters are updated to reflect the inclusion of the new data point.
        </li>
        <li>
          <strong>Controlled Updates:</strong> To maintain stability and prevent excessive changes in the clusters, some implementations of incremental k-means may include mechanisms to control the rate at which updates are applied.
        </li>
      </ol>

      <p>
        The advantages of incremental k-means clustering lie in its ability to adapt to evolving data patterns without the need for computationally expensive reprocessing of the entire dataset. This makes it particularly well-suited for scenarios where data is continuously streaming or arriving in real-time.
      </p>

      <p>
        It's important to note that the specific details of incremental k-means implementations can vary. Factors such as the choice of initialization strategy, update frequency, and mechanisms for managing computational resources may differ based on the specific requirements of the application or the library/tool being used.
      </p>

      <h4 className='mt-4 mb-4'>Given below is the algorithm of the incremental Kmeans</h4>
        <p className='container d-flex justify-content-center align-items-center'>
        <p>
        Set <strong>T = (t₁, ..., tₖ)</strong> to the first <strong>k</strong> data points <br />
        Initialize the counts <strong>n₁, n₂, ..., nₖ</strong> to 1 <br />
        Repeat: <br />
        &emsp; Acquire the next example, <strong>x</strong> <br />
        &emsp; If <strong>tᵢ</strong> is the closest center to <strong>x</strong>: <br />
        &emsp;&emsp; Increment <strong>nᵢ</strong> <br />
        &emsp;&emsp; Replace <strong>tᵢ</strong> by <strong>tᵢ + 1/nᵢ(x - tᵢ)</strong>
      </p>
      </p>
      <p>
        This method attempts to find centers <strong>T</strong> that optimize the <strong>k</strong>-means cost function:
      </p>
      <p className='container d-flex justify-content-center align-items-center'>
        <p><strong>cost</strong>(<strong>T</strong>) = ∑<sub>data x</sub> min<sub>t ∈ 𝓣</sub> ‖x - t‖²</p>
        
      </p>
      <div className='container  d-flex justify-content-center align-items-center border bg-dark rounded '>
      <pre>
      <SyntaxHighlighter language="python">
                    {pythonCode}
                </SyntaxHighlighter>
      </pre>
      </div>
      <div className='d-flex' >
      <img className= 'pt-4 pb-4'src= {kmeans} alt="kmeans" />
      <img className= 'p-4'src= {sklearn} alt="sklearn" />

      </div>
      <div className='container  d-flex justify-content-center align-items-center '>
        <video width="640" height="740" controls>
            <source src={kmeanvideo} type="video/mp4"/>
        </video>
        </div>
    </div>
  )
}

export default Kmeans