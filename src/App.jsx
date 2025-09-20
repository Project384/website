import React, { useState } from 'react'
export default function App(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [role,setRole]=useState('project')
  const [resume,setResume]=useState(null)
  const [message,setMessage]=useState('')
  const [submitted,setSubmitted]=useState(false)
  function handleFile(e){
    const f=e.target.files[0]
    if(f) setResume(f.name)
    else setResume(null)
  }
  function handleSubmit(e){
    e.preventDefault()
    const data={name,email,role,resume,message,appliedAt:new Date().toISOString()}
    let arr=JSON.parse(localStorage.getItem('applications')||'[]')
    arr.unshift(data)
    localStorage.setItem('applications',JSON.stringify(arr))
    setSubmitted(true)
  }
  return (
    <div className="page">
      <header className="header">
        <h1>PM Internship Scheme</h1>
        <p>Smart India Hackathon - Application Portal</p>
      </header>
      <main className="container">
        <section className="form-card">
          <h2>Apply Now</h2>
          {!submitted && <form onSubmit={handleSubmit} className="form">
            <label>
              Full name
              <input required value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label>
              Email address
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <label>
              Preferred role
              <select value={role} onChange={e=>setRole(e.target.value)}>
                <option value="product">Product</option>
                <option value="project">Project Management</option>
                <option value="design">Design</option>
                <option value="research">Research</option>
              </select>
            </label>
            <label>
              Upload resume
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
              <div className="file-name">{resume||'No file chosen'}</div>
            </label>
            <label>
              Short note
              <textarea value={message} onChange={e=>setMessage(e.target.value)} />
            </label>
            <div className="actions">
              <button type="submit">Submit Application</button>
              <button type="button" onClick={()=>{
                setName('');setEmail('');setRole('project');setResume(null);setMessage('')
              }}>Clear</button>
            </div>
          </form>}
          {submitted && <div className="success">
            <h3>Application received</h3>
            <p>Thank you. Your application is saved locally. You can view stored applications in local storage.</p>
            <button onClick={()=>{
              setSubmitted(false);setName('');setEmail('');setRole('project');setResume(null);setMessage('')
            }}>Submit another</button>
          </div>}
        </section>
        <aside className="info-card">
          <h3>About the Scheme</h3>
          <p>This portal collects applications for the PM Internship Scheme at SIH. Fill details and upload your resume.</p>
          <h4>Saved applications</h4>
          <Applications />
        </aside>
      </main>
      <footer className="footer">
        <small>Made for SIH | Local demo</small>
      </footer>
    </div>
  )
}
function Applications(){
  const [list,setList]=useState(()=>JSON.parse(localStorage.getItem('applications')||'[]'))
  function clearAll(){
    localStorage.removeItem('applications')
    setList([])
  }
  return (
    <div>
      {list.length===0 && <p>No applications saved</p>}
      {list.length>0 && <ul className="apps">
        {list.map((a,i)=><li key={i}><strong>{a.name}</strong><br/>{a.email}<br/>{a.role}<br/>{new Date(a.appliedAt).toLocaleString()}</li>)}
      </ul>}
      <div className="small-actions">
        <button onClick={()=>{navigator.clipboard.writeText(JSON.stringify(list));alert('Copied to clipboard')}}>Copy JSON</button>
        <button onClick={clearAll}>Clear saved</button>
      </div>
    </div>
  )
}
