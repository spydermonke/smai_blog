import React from 'react'

function Intro() {
  return (
    <div  className='m-5 p-3 intro-container bg-light'
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
        
    <div className='container'>
    <h3>Definitions</h3>
        <p style={{
          textAlign: 'center',
        }}>
        We consider a space <strong>X</strong> equipped with a symmetric distance function{' '}
        <strong>d: X × X → ℝ⁺</strong> satisfying <strong>d(x, x) = 0</strong>.<br/> A clustering algorithm
        can invoke <strong>d(·, ·)</strong> on any pair <strong>x, x' ∈ X</strong>. A clustering of{' '}
        <strong>X</strong> is a set of clusters <strong>C = {'{'}C₁, ..., Cₖ{'}'}</strong> such that{' '}
        <strong>Cᵢ ∩ Cⱼ ≠ ∅</strong> for all <strong>i ≠ j</strong>, and <strong>X = ⋃ᵢ₌₁ˢ Cᵢ</strong>.<br/> A{' '}
        <strong>k</strong>-clustering is a clustering with <strong>k</strong> clusters. Write{' '}
        <strong>x ~ₖ y</strong> if <strong>x, y</strong> are both in some cluster <strong>Cⱼ</strong>; and{' '}
        <strong>x /∼ₖ y</strong> otherwise. This is an equivalence relation.
      </p>
      <h5>General Structure for Incremental Clustering Algorithm</h5>
      <p className='container d-flex justify-content-center align-items-center'>
        <p>
        for <strong>n</strong> = 1, ..., <strong>N</strong>: <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See data point <strong>x<sub>n</sub></strong> in <strong>𝓧</strong> <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select model <strong>M<sub>n</sub></strong> in <strong>𝓜</strong>
        </p>
       
      </p>
      <p>
        where <strong>N</strong> might be <strong>∞</strong>, and <strong>𝓜</strong> is a collection of clusterings of <strong>𝓧</strong>.
      </p>
    </div>
    </div>
  )
}

export default Intro