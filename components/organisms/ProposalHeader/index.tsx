interface ProposalHeaderProps {
    type: 'desktop' | 'mobile';
    data: {
      idAjaran: string;
      name: string;
      thumbnail: string;
      periode: {
        date: string;
      }
    }
}
export default function ProposalHeader(props : ProposalHeaderProps) {
  const { type, data } = props;

  if (type === 'desktop') {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {data.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Periode Pengajuan:
          <br />
          {' '}
          {data.periode.date}
        </p>
      </div>
    );
  }
  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img src={`${data.thumbnail}`} width="280" height="380" className="img-fluid" alt="" />
      </div>
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {data.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Periode Pengajuan:
          <br />
          {' '}
          {data.periode.date}
        </p>
      </div>
    </div>
  );
}
