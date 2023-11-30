import React from 'react'
import './styles.css'; 

function Theorms1() {
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
            <h2>A basic Limitation of Incremental Clustering</h2>
            <p>
                Before we begin with finding out the limitations of incremental clustering we must look at the definition of nice clustering.
            </p>
            <h4>Definition (Nice Clustering)</h4>
            <p>
                A clustering <strong>C</strong> of (<strong>X</strong>, <strong>d</strong>) is nice if for all <strong>x</strong>, <strong>y</strong>, <strong>z</strong> in <strong>X</strong>, <strong>d(y, x) &lt; d(z, x)</strong> whenever <strong>x ∼C y</strong> and <strong>x /∼C z</strong>.
            </p>
            <p>
                In other words, if <strong>x</strong> and <strong>y</strong> are in the same cluster, then <strong>x</strong> is closer to <strong>y</strong> than to any other point in a different cluster.
            </p>

            <p>
                <strong>Observation</strong> If we select one point from every cluster of a nice clustering <strong>C</strong>, the resulting set induces <strong>C</strong>. (Moreover, niceness is the minimal property under which this holds.)
            </p>
            <h4>The Uniqueness of Nice k-Clustering</h4>

            <p>
                The concept of "nice k-clustering" is a fascinating aspect of data analysis, where a set of data points is partitioned into k distinct clusters in a particular manner. It's important to note that a nice k-clustering is not necessarily unique.
            </p>

            <p>
                Let's consider an example: <code>X = {"1, 2, 4, 5"}</code> on the real line under the usual distance metric. In this scenario, both of the following clusterings are considered nice 3-clusterings of X:
            </p>

            <ul>
                <li>{"{1}, {2}, {4, 5}"}</li>
                <li>{"{1, 2}, {4}, {5}"}</li>
            </ul>

            <p>
                In mathematical terms, a nice k-clustering can be represented as a collection of sets <code>C1, C2, ..., Ck</code> satisfying specific criteria, such as internal cohesion within clusters and separation between clusters.
            </p>

            <p>
                These clusterings demonstrate that nice k-clusterings are not unique, even though they exhibit properties of internal cohesion and separation between clusters. This flexibility in clustering showcases the dynamic nature of data analysis.
            </p>

            <p>
                In conclusion, the mathematical representation involves defining sets of clusters that fulfill specific criteria for a given set of data points, highlighting the uniqueness and variability in nice k-clusterings.
            </p>

            {/*     Batch Setting:
        In the batch setting, where all the data is available at once, it is mentioned that a unique nice k-clustering can be recovered by using a method called "single-linkage."

    Incremental Setting:
        However, the statement goes on to emphasize that, in the incremental setting (where data is presented gradually), nice partitions cannot be detected, even if they are unique. */}
          <h5>Batch Setting:</h5>
            <p> In the batch setting, where all the data is available at once, it is mentioned that a unique nice k-clustering can be recovered by using a method called "single-linkage."
            </p>
            <h5>Incremental Setting:</h5>
            <p>
                However, in the incremental setting (where data is presented gradually), nice partitions cannot be detected, even if they are unique.  </p>
        </div>
    )
}

export default Theorms1