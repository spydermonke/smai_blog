import React from 'react'
import './styles.css';
function Theorms3() {
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
        <h2>Understanding Theorem 3.8</h2>
      <p>
        In this section, we delve into the intricacies of Theorem 3.8, revealing that no deterministic,
        memory-bounded incremental method can be nice-detecting, even for points in Euclidean space under the ℓ<sub>2</sub> metric.
      </p>
      <p>
        The proof begins with an intuitive understanding. Consider any incremental clustering algorithm
        and fix the number of clusters to 3. The goal is to construct a data set, D, with a unique nice 3-clustering
        that the algorithm cannot detect. This data set, D, is partitioned into two subsets, D1 and D2, which are
        far away from each other but are nearly isomorphic.
      </p>
      <p>
        The central component of this construction is the configuration of D1 (and D2). It starts with a point xo,
        followed by a clique of points xi that are equidistant from each other and have a slightly larger distance
        to xo. The distances within the clique (d(xi, xj)) are set to 1, and distances to xo (d(xi, xo)) are set to 2.
        There is also a point x0, which is either exactly like one of the xi’s (same distances) or differs in just one specific distance
        (d(x0, xj)), which is set to 2. This leads to two possibilities for a nice 2-clustering of D1.
      </p>
      <p>
        D2 is constructed similarly to D1, but it is rigged such that if D1 has a nice 2-clustering, then D2 does not, and vice versa.
        The challenge is to distinguish between these almost identical possibilities for D1 without the luxury of remembering all points
        seen, a constraint faced by memory-bounded incremental learners.
      </p>
      <p>
        To specify D1, a larger collection of points called an M-configuration is introduced, independent of any algorithm.
        Two possibilities for D1 (with and without a nice 2-clustering) are then selected from this collection based on the specific learner's behavior.
      </p>
      <h5>Definition 3.4: M-Configuration in Metric Spaces</h5>
      <p>
        In any metric space (X, d), let M be any positive integer. We define an M-configuration as a collection of
        2M + 1 points: xo, x1, ..., xM, x0<sub>1</sub>, ..., x0<sub>M</sub> ∈ X satisfying the following conditions:
      </p>
      <ul>
        <li>All interpoint distances are in the range [1, 2].</li>
        <li>d(xo, xi), d(xo, x0<sub>i</sub>) ∈ (3/2, 2] for all i ≥ 1.</li>
        <li>d(xi, xj), d(x0<sub>i</sub>, x0<sub>j</sub>), d(xi, x0<sub>j</sub>) ∈ [1, 3/2] for all i ≠ j ≥ 1.</li>
        <li>d(xi, x0<sub>i</sub>){">"} d(xo, xi).</li>
      </ul>
      <p>
        The significance of this point configuration lies in its constraints, ensuring that distances between points
        fall within specified ranges. The conditions capture relationships between different points, emphasizing the
        specific arrangements required for an M-configuration in a given metric space.
      </p>
      <h5>Lemma 3.5: Nice 2-Clustering in M-Configuration</h5>
      <p>
        Consider an M-configuration in a metric space (X, d) with points xo, x1, ..., xM, x0<sub>1</sub>, ..., x0<sub>M</sub>.
        Lemma 3.5 establishes conditions for a nice 2-clustering of a specific set A = {'{'}xo, x0<sub>j</sub>{'}'} ∪ {'{'}xi: i ∈ S{'}'},
        where S is a subset of indices [M] with |S| {">"} 1, and j is any index such that 1 ≤ j ≤ M.
      </p>
      <h5>Statement:</h5>
      <p>
        The set A has a nice 2-clustering if and only if j is not an element of S.
      </p>
      <h5>Proof:</h5>
      <p>
        Suppose A has a nice 2-clustering {'{'}C1, C2{'}'}, where C1 is the cluster containing xo.
        We aim to show that C1 is a singleton cluster. If C1 also contains some x`, then it must contain all
        points {'{'}xi: i ∈ S{'}'} by niceness, since d(x`, xi) ≤ 3/2 {"<"} d(x`, xo). As |S| {">"} 1, these
        points include some xi with i ≠ j. This implies C1 must also contain x0<sub>j</sub>,
        since d(xi, x0<sub>j</sub>) ≤ 3/2 {"<"} d(xi, xo). This, however, means C2 is empty.   </p>
      <p>
        Likewise, if C1 contains x0<sub>j</sub>, then it also contains all {'{'}xi: i ∈ S, i ≠ j{'}'}, since d(xi, x0<sub>j</sub>) {"<"} d(xo, x0<sub>j</sub>).
        There is at least one such xi, and we revert to the previous case.
      </p>
      <p>
        Therefore, C1 = {'{'}xo{'}'}, and as a result, C2 = {'{'}xi: i ∈ S{'}'} ∪ {'{'}x0<sub>j</sub>{'}'}. This 2-clustering is nice if and only if
        d(xo, x0<sub>j</sub>) {">"} d(xi, x0<sub>j</sub>) and d(xo, xi) {">"} d(x0<sub>j</sub>, xi) for all i ∈ S,
        which is true if and only if j is not in S.
      </p>

      <h5>Theorem 3.6: No Deterministic Incremental Algorithm for Nice 3-Clusterings</h5>
      <p>
        Let (X, d) be any metric space containing two M-configurations separated by a distance of at least 4.
        Then, there is no deterministic incremental algorithm with ≤ M/2 bits of storage that is guaranteed to
        recover nice 3-clusterings of data sets drawn from X, even when limited to instances in which such
        clusterings are unique.
      </p>
      <h5>Proof:</h5>
      <p>
        Suppose the deterministic incremental learner has a memory capacity of b bits. We will refer
        to the memory contents of the learner as its state, σ ∈ {'{'}0, 1{'}'}&lt;sup&gt;b&lt;/sup&gt;.
        Call the two M-configurations xo, x1, ..., xM, x0{'{'}1{'>'}, ..., x0{'{'}M{'>'} and zo, z1, ..., zM, z0{'{'}1{'>'}, ..., z0{'{'}M{'>'}.
        We feed the following points to the learner:
      </p>
      <ul>
        <li>Batch 1: xo and zo</li>
        <li>Batch 2: b distinct points from x1, ..., xM</li>
        <li>Batch 3: b distinct points from z1, ..., zM</li>
        <li>Batch 4: Two final points x{'{'}0j1{'}'} and z{'{'}0j2{'}'}</li>
      </ul>
      <p>
        The learner’s state after seeing batch 2 can be described by a function f : {'{'}x{'{'}1{'}'}, ..., x{'{'}M{'}'}{'>'}&lt;sup&gt;b&lt;/sup&gt; → {'{'}0, 1{'}'}&lt;sup&gt;b&lt;/sup&gt;.
        The number of distinct sets of b points in batch 2 is M{'{'}b{'}'} > (M/b){'{'}b{'}'}. If M ≥ 2b, this is > 2{'{'}b{'}'}, which
        means that two different sets of points must lead to the same state, call it σ ∈ {'{'}0, 1{'}'}&lt;sup&gt;b&lt;/sup&gt;.
        Let the indices of these sets be S1, S2 ⊂ [M] (so |S1| = |S2| = b), and pick any j1 ∈ S1 \ S2.
      </p>
     
      <p>
        It follows that the sequences of inputs xo, zo,(xi: i ∈ S1),(zi: i ∈ T2), x0{'{'}j1{'}'}, z0{'{'}j2{'}'} and
        xo, zo,(xi: i ∈ S2),(zi: i ∈ T1), x0{'{'}j1{'}'}, z0{'{'}j2{'}'} produce the same final state and thus the same answer.
        But in the first case, by Lemma 3.5, the unique nice 3-clustering keeps the x’s together and splits the z’s,
        whereas in the second case, it splits the x’s and keeps the z’s together.
      </p>

      <h6>Lemma 3.7: Realization of M-Configuration in Euclidean Space</h6>
      <p>
        There is an absolute constant c{'{'}0{'}'} such that for any dimension p, the Euclidean space R{'{'}p{'}'},
        with L2 norm, contains M-configurations for all M {'<'} 2{'{'}cop{'}'}.
      </p>
    </div>
  )
}

export default Theorms3