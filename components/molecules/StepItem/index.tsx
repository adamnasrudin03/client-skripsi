export interface StepItemProps {
    icon: 'step1' | 'step2' | 'step3' | 'website-design'
    | 'mobile' | 'iot' | 'dashboard' | 'integration' | 'shipping'
    | 'logo-design' | 'disconnect'
    title: string;
    desc1: string;
    desc2: string;
}
export default function StepItem(props: StepItemProps) {
  const {
    icon, title, desc1, desc2,
  } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0" style={{ minHeight: '350px' }}>
        <img src={`/icon/${icon}.svg`} alt="icon step" className="mb-30" width={80} height={80} />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
