import React from 'react'

function Theory() {
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
            <h2>Unraveling Sequential k-Means with Extra Clusters</h2>

            <p>
                In the landscape of clustering algorithms, Sequential k-means plays a pivotal role. The exploration of its
                capabilities takes an interesting turn when additional clusters are introduced. Theorems and conditions unveil
                the algorithm's potential to discover variant nice partitionings.
            </p>

            <h3>The Limitations and Possibilities</h3>
            <p>
                Building upon Theorem 4.4, which revealed severe limitations of sequential k-means, the introduction of extra
                clusters breathes new life into the algorithm. The promising outcome is the ability to identify a variant of
                nice partitionings.
            </p>

            <h3>Defining Convex-Nice Clustering</h3>
            <p>
                <strong>Definition 5.5: Convex-Nice Clustering</strong>
                <br />
                A clustering C = {'{'}C<sub>1</sub>, . . . , C<sub>k</sub>{'}'} is convex-nice if, for any i ≠ j, any points x, y
                in the convex hull of C<sub>i</sub>, and any point z in the convex hull of C<sub>j</sub>, we have d(y, x) {'<'} d(z, x).
            </p>

            <h3>The Promise of Convex-Nice Clustering</h3>
            <p>
                <strong>Theorem 5.6:</strong> Fix a data set (X, d) with a convex-nice clustering C = {'{'}C<sub>1</sub>, . . . , C<sub>k</sub>{'}'} and let
                β = min<sub>i</sub> |C<sub>i</sub>|/|X|. If the points are ordered uniformly at random, then for any ` ≥ k, sequential
                `-means will return a refinement of C with probability at least 1 − ke<sup>−β`</sup>.
            </p>

            <p>
                The probability of failure is small when the refinement contains ` = Ω((log k)/β) centers. However, this positive
                result no longer holds when data is adversarially ordered.
            </p>

            <h3>The Adversarial Challenge</h3>
            <p>
                <strong>Theorem 5.7:</strong> Pick any k ≥ 3. Consider any data set X in R (under the usual metric) that has a convex-nice
                k-clustering C = {'{'}C<sub>1</sub>, . . . , C<sub>k</sub>{'}'}. Then there exists an ordering of X under which sequential `-means
                with ` ≤ min<sub>i</sub> |C<sub>i</sub>| centers fails to return a refinement of C.
            </p>
            <div className='border '>
            <h5> Convex Hull</h5>
            <p>
                The term <strong>convex hull</strong> refers to the smallest convex set that contains a given set of points.  A set Y is said to be convex if for any points a, b ∈ Y, every point on the straight-line segment joining them is also in Y. The convex hull of a set of points X in Euclidean space is the smallest convex set containing X.
            </p>
            </div>
        </div>
    )
}

export default Theory