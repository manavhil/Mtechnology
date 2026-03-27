import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../imports/Blogs';
import { FunctionalHeader } from '../components/shared/FunctionalHeader';
import { DemoModal } from '../components/shared/DemoModal';
import { Footer } from '../components/shared/Footer';

const uiText = {
  en: {
    backToBlog: 'Back to Blog',
    notFound: 'Article not found.',
    backBtn: '← Back to Blog',
    topics: 'Topics',
    share: 'Share',
    continueReading: 'Continue Reading',
    relatedArticles: 'Related Articles',
    linkedin: 'LinkedIn',
    twitter: 'Twitter / X',
    copyLink: 'Copy Link',
  },
  ar: {
    backToBlog: 'العودة إلى المدونة',
    notFound: 'المقال غير موجود.',
    backBtn: 'العودة إلى المدونة ←',
    topics: 'المواضيع',
    share: 'مشاركة',
    continueReading: 'تابع القراءة',
    relatedArticles: 'مقالات ذات صلة',
    linkedin: 'لينكد إن',
    twitter: 'تويتر / X',
    copyLink: 'نسخ الرابط',
  },
};

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    return (localStorage.getItem('app_lang') as 'en' | 'ar') || 'en';
  });

  const isAr = lang === 'ar';
  const t = uiText[lang];
  const post = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem('app_lang') as 'en' | 'ar') || 'en');
    };
    window.addEventListener('languageChange', handleGlobalLangChange);
    return () => window.removeEventListener('languageChange', handleGlobalLangChange);
  }, []);

  if (!post) {
    return (
      <div style={{ backgroundColor:'rgb(11,11,15)', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center' }}>
          <p style={{ color:'#73798c', fontSize:'18px', marginBottom:'24px' }}>{t.notFound}</p>
          <button onClick={() => navigate('/blog')} style={{ padding:'12px 28px', background:'#3562e9', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'14px', fontWeight:600 }}>{t.backBtn}</button>
        </div>
      </div>
    );
  }

  const related = blogs.filter(b => b.id !== post.id).slice(0, 3);
  const arFont = "'Noto Sans Arabic','Cairo',Tahoma,sans-serif";

  return (
    <div style={{ overflow:'hidden', backgroundColor:'rgb(11,11,15)' }} dir={isAr ? 'rtl' : 'ltr'}>
      <style>{`
        [data-name="Header"] { display: none !important; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); filter:blur(4px); }
          to   { opacity:1; transform:translateY(0); filter:blur(0); }
        }
        .fade-up { opacity: 0; }
        .fade-up.go { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }

        .article-body h2 {
          font-size:20px; font-weight:700; color:#fafafa; margin:36px 0 14px;
          letter-spacing:${isAr ? '0' : '-0.3px'}; line-height:1.4;
          font-family:${isAr ? arFont : 'inherit'};
          text-align:${isAr ? 'right' : 'left'};
        }
        .article-body p {
          font-size:15px; color:#9ba3b8; line-height:1.9; margin-bottom:16px;
          text-align:${isAr ? 'right' : 'justify'};
          font-family:${isAr ? arFont : 'inherit'};
        }

        .back-btn {
          display:inline-flex; align-items:center; gap:8px;
          font-size:13px; font-weight:500; color:#73798c;
          background:rgba(255,255,255,0.04); border:0.5px solid rgba(255,255,255,0.08);
          border-radius:8px; padding:8px 16px; cursor:pointer;
          transition:color 0.2s, background 0.2s;
          font-family:${isAr ? arFont : 'inherit'};
        }
        .back-btn:hover { color:#86a3f9; background:rgba(53,98,233,0.08); }

        .related-card {
          background:rgba(255,255,255,0.02); border:0.5px solid rgba(255,255,255,0.08);
          border-radius:14px; padding:20px; cursor:pointer;
          transition:border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .related-card:hover { border-color:rgba(53,98,233,0.35); background:rgba(53,98,233,0.04); transform:translateY(-3px); }

        .blog-tag {
          display:inline-flex; align-items:center; padding:3px 10px; border-radius:9999px;
          font-size:11px; font-weight:500; letter-spacing:0.5px;
          background:rgba(53,98,233,0.12); color:#86a3f9; border:0.5px solid rgba(134,163,249,0.2);
          font-family:${isAr ? arFont : 'inherit'};
        }

        .share-btn {
          display:inline-flex; align-items:center; gap:6px; padding:8px 18px; border-radius:8px;
          font-size:13px; font-weight:500; cursor:pointer; transition:all 0.2s;
          background:rgba(255,255,255,0.04); border:0.5px solid rgba(255,255,255,0.1);
          color:#73798c; text-decoration:none;
          font-family:${isAr ? arFont : 'inherit'};
        }
        .share-btn:hover { color:#86a3f9; border-color:rgba(134,163,249,0.3); background:rgba(53,98,233,0.06); }

        .article-main { max-width:780px; margin:0 auto; padding:120px 32px 80px; }
        .related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .related-section { padding:64px 60px 80px; }

        @media (max-width: 900px) {
          .related-grid { grid-template-columns: 1fr 1fr; }
          .related-section { padding: 48px 24px 60px; }
        }
        @media (max-width: 600px) {
          .article-main { padding: 100px 16px 60px; }
          .related-grid { grid-template-columns: 1fr; }
          .related-section { padding: 40px 16px 48px; }
          .article-body h2 { font-size: 18px; }
          .share-row { flex-wrap: wrap; gap: 8px; }
        }
      `}</style>

      <FunctionalHeader onRequestDemo={() => setIsDemoModalOpen(true)} />

      <main className="article-main">
        {/* Back button */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ marginBottom:'40px' }}>
          <button className="back-btn" onClick={() => navigate('/blog')}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>
              <path d="M12.6667 8H3.33333M6.66667 4.66667L3.33333 8L6.66667 11.3333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.backToBlog}
          </button>
        </div>

        {/* Meta row */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ animationDelay:'80ms', display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px', flexWrap:'wrap', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
          <span style={{ padding:'4px 12px', borderRadius:'9999px', fontSize:'11px', fontWeight:700, letterSpacing:'0.8px', background:'rgba(53,98,233,0.15)', color:'#3562e9', border:'0.5px solid rgba(53,98,233,0.4)', fontFamily: isAr ? arFont : 'inherit' }}>
            {isAr ? post.categoryAr : post.category}
          </span>
          <span style={{ fontSize:'13px', color:'#73798c', fontFamily: isAr ? arFont : 'inherit' }}>{isAr ? post.dateAr : post.date}</span>
          <span style={{ fontSize:'13px', color:'#73798c' }}>·</span>
          <span style={{ fontSize:'13px', color:'#73798c', fontFamily: isAr ? arFont : 'inherit' }}>{isAr ? post.readTimeAr : post.readTime}</span>
        </div>

        {/* Title */}
        <h1
          className={`fade-up${started ? ' go' : ''}`}
          style={{ animationDelay:'140ms', fontSize:'clamp(26px, 5vw, 40px)', fontWeight:700, letterSpacing: isAr ? '-0.5px' : '-1.2px', lineHeight:1.3, background:'linear-gradient(135deg, #fafafa 0%, #86a3f9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:'28px', fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}
        >
          {isAr ? post.titleAr : post.title}
        </h1>

        {/* Divider */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ animationDelay:'200ms', height:'1px', background:'linear-gradient(90deg, rgba(53,98,233,0.4), transparent)', marginBottom:'36px' }} />

        {/* Article body */}
        <div
          className={`article-body fade-up${started ? ' go' : ''}`}
          style={{ animationDelay:'260ms' }}
          dangerouslySetInnerHTML={{ __html: isAr ? post.contentAr : post.content }}
        />

        {/* Tags */}
        <div className={`fade-up${started ? ' go' : ''}`} style={{ animationDelay:'320ms', marginTop:'40px', paddingTop:'28px', borderTop:'0.5px solid rgba(255,255,255,0.07)' }}>
          <p style={{ fontSize:'12px', color:'#4a5068', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'12px', fontWeight:600, fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{t.topics}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
            {(isAr ? post.tagsAr : post.tags).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
          </div>
        </div>

        {/* Share row */}
        <div className={`fade-up${started ? ' go' : ''} share-row`} style={{ animationDelay:'360ms', marginTop:'28px', display:'flex', alignItems:'center', gap:'12px', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
          <span style={{ fontSize:'12px', color:'#4a5068', textTransform:'uppercase', letterSpacing:'1px', fontWeight:600, fontFamily: isAr ? arFont : 'inherit' }}>{t.share}</span>
          <a className="share-btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            {t.linkedin}
          </a>
          <a className="share-btn" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(isAr ? post.titleAr : post.title)}`} target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            {t.twitter}
          </a>
          <button className="share-btn" onClick={() => navigator.clipboard.writeText(window.location.href)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            {t.copyLink}
          </button>
        </div>
      </main>

      {/* Related Articles */}
      <section className="related-section" style={{ borderTop:'0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:'1320px', margin:'0 auto' }}>
          <p style={{ fontSize:'12px', color:'#3562e9', textTransform:'uppercase', letterSpacing:'1.2px', fontWeight:600, marginBottom:'8px', fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{t.continueReading}</p>
          <h2 style={{ fontSize:'clamp(20px, 3vw, 28px)', fontWeight:700, color:'#fafafa', letterSpacing: isAr ? '-0.3px' : '-0.6px', marginBottom:'28px', fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{t.relatedArticles}</h2>
          <div className="related-grid">
            {related.map(r => (
              <div key={r.id} className="related-card" onClick={() => { navigate(`/blog/${r.id}`); window.scrollTo(0,0); }}>
                <span style={{ display:'inline-block', marginBottom:'10px', padding:'3px 10px', borderRadius:'9999px', fontSize:'10px', fontWeight:700, letterSpacing:'0.8px', background:'rgba(53,98,233,0.15)', color:'#3562e9', border:'0.5px solid rgba(53,98,233,0.4)', fontFamily: isAr ? arFont : 'inherit' }}>
                  {isAr ? r.categoryAr : r.category}
                </span>
                <h3 style={{ fontSize:'15px', fontWeight:600, lineHeight:1.5, color:'#e8eaf2', marginBottom:'8px', letterSpacing: isAr ? '0' : '-0.2px', fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}>
                  {isAr ? r.titleAr : r.title}
                </h3>
                <p style={{ fontSize:'12px', color:'#73798c', fontFamily: isAr ? arFont : 'inherit', textAlign: isAr ? 'right' : 'left' }}>{isAr ? r.readTimeAr : r.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}