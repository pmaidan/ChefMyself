// export function MealCard({ title, mealName, onEdit, onRemove }) {
//   return (
//     <div className="theme-terracotta" style={{ borderRadius: '12px', padding: '12px', width: '100%', maxWidth: '350px' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginBottom: '8px' }}>
//         <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>{title}</span>
//         <button onClick={onRemove} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem' }}>&times;</button>
//       </div>
//       <div className="theme-cream" style={{ borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <div style={{ width: '64px', height: '64px', backgroundColor: '#ccc', borderRadius: '6px' }} />
//           <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontSize: '1.1rem' }}>{mealName}</span>
//         </div>
//         <button className="btn-primary">edit</button>
//       </div>
//     </div>
//   );
// }
export function MealCard({ title, mealName, onEdit, onRemove }) {
  return (
    <div className="meal-card-outer">
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', padding: '0 4px 8px 4px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1.1rem' }}>{title}</span>
        <button onClick={onRemove} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem' }}>
          &times;
        </button>
      </div>

      {/* Card White Body */}
      <div className="meal-card-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="meal-image-placeholder" />
          <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-light)', fontSize: '1.1rem', fontWeight: '500' }}>
            {mealName}
          </span>
        </div>
        <button className="btn-primary" onClick={onEdit} style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
          edit
        </button>
      </div>
    </div>
  );
}