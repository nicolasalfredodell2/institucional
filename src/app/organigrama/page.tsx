import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organización | Tribunal de Cuentas de Río Negro',
};

export default function OrganigramaPage() {
  return (
    <section className="fade-in mb-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>
            ORGANIZACIÓN
          </h3>
        </div>
      </div>

      <div className="col-12">
        <img src="/assets/img/organization-chart/organization-chart.png" alt="Organigrama" className="w-100" />
      </div>
    </section>
  );
}
