import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Transgasindo</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-[300px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">Corporate Activities</h1>
          </div>
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-0"
            src="/static/images/banner/page-banner-03.jpg"
            alt=""
            width={1920}
            height={400}
            priority
          ></Image>
        </div>

        <section id="overview" className="py-24 scroll-mt-24">
          <div className="container px-8 mx-auto">
            <div className="flex">
              <div className="w-1/2 pr-24">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    className="rounded-[48px] w-full h-full object-cover"
                    src="/static/images/about-img-01.jpg"
                    alt=""
                    width={600}
                    height={720}
                    priority
                  />
                </div>
              </div>
              <div className="w-1/2 pt-12">
                <h2 className="text-4xl font-bold text-tgi-darkblue mb-8">Overview</h2>
                <div className="prose mt-8">
                  <p>
                    Other aspects of increasing corporate values include the implementation of all
                    daily business activities in line with the principles of Good Corporate
                    Governance and Business Ethics. Further, we implement a comprehensive Health,
                    Safety and Environment management system, synergizing every resource, developing
                    local community relations and strengthening communications with and concern for
                    our valued employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gcg" className="py-24 scroll-mt-24 bg-slate-100">
          <div className="container px-8 max-w-screen-xl mx-auto">
            <div className="">
              <h2 className="text-4xl font-bold text-tgi-darkblue mb-4">
                Good Corporate Governance (GCG)
              </h2>
              <h3 className="text-tgi-green font-bold text-xl mb-4">
                PRINSIP-PRINSIP PENERAPAN TATA KELOLA PERUSAHAAN YANG BAIK
              </h3>
              <div className="prose">
                Perseroan berkomitmen tinggi untuk terus menanamkan prinsip- prinsip GCG yaitu
                Transparansi, Akuntabilitas, Responsibiltas, Kemandirian dan Kewajaran ke dalam
                seluruh aspek usaha, menjadi penerapan yang konsisten dan berkesinambungan guna
                meraih keberhasilan usaha secara lebih optimal serta menjaga ketahanan usaha.
              </div>
            </div>
            <div className="my-8 overflow-auto">
              <table className="table w-full gcg-table">
                <thead>
                  <tr>
                    <th>Prinsip</th>
                    <th>Deskripsi</th>
                    <th>Penerapan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Transparansi</th>
                    <td>
                      Pengungkapan informasi Perusahaan dan fakta material secara tepat waktu,
                      jelas, akurat dan dapat diakses oleh pemegang saham.
                    </td>
                    <td>
                      Pengungkapan informasi oleh Perseroan dilakukan secara jelas dan tepat waktu,
                      serta dapat diakses dengan mudah oleh seluruh pemangku kepentingan sebagaimana
                      diatur dalam perundang-undangan yang berlaku.
                    </td>
                  </tr>
                  <tr>
                    <th>Akuntabilitas</th>
                    <td>
                      Menetapkan fungsi, struktur, sistem, dan pelaksanaan pertanggungjawaban organ
                      Perusahaan sehingga dapat berjalan secara efektif.
                    </td>
                    <td>
                      Prinsip ini mengedepankan kejelasan fungsi, tugas, dan tanggung jawab dari
                      masing-masing organ Perseroan demi tercapainya visi, misi, tujuan, dan
                      kepentingan Perseroan.
                    </td>
                  </tr>
                  <tr>
                    <th>Tanggung Jawab </th>
                    <td>
                      Kesesuaian di dalam pengelolaan perusahaan terhadap prinsip korporasi yang
                      sehat serta peraturan perundangan yang berlaku termasuk dengan tanggung jawab
                      sosial perusahaan.
                    </td>
                    <td>
                      Pelaksanaan kegiatan operasional bisnis wajib mematuhi peraturan
                      perundang-undangan dan ketentuan yang berlaku di Indonesia.
                    </td>
                  </tr>
                  <tr>
                    <th>Independensi</th>
                    <td>
                      Perusahaan dikelola secara profesional tanpa benturan kepentingan dan pengaruh
                      dari pihak manapun yang tidak sesuai dengan peraturan perundang-undangan yang
                      berlaku dan prinsip korporasi yang sehat.
                    </td>
                    <td>
                      Dalam mengelola bisnisnya, Perseroan menjunjung tinggi sikap objektif dan
                      terbebas dari pengaruh atau tekanan pihak manapun yang dapat mempengaruhi
                      jalannya operasional.
                    </td>
                  </tr>
                  <tr>
                    <th>Kewajaran</th>
                    <td>
                      Perlakuan yang adil dan setara di dalam memenuhi hak-hak stakeholder yang
                      timbul berdasarkan perjanjian serta peraturan perundangan yang berlaku.
                    </td>
                    <td>
                      Perseroan menerapkan prinsip keadilan dan kesetaraan dalam memenuhi hak-hak
                      pemangku kepentingan yang timbul berdasarkan perjanjian dan peraturan
                      perundang-undangan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-x-8 mt-24 mb-8 justify-center">
              <div className="w-1/2 max-w-lg bg-white rounded-2xl border-t-2 border-r-2 border-b-8 border-l-2 border-tgi-amber p-8">
                <h5 className="text-2xl text-tgi-green font-bold mb-4">
                  Pedoman Perilaku / Code of Conduct (CoC)
                </h5>
                <div>Download Link</div>
              </div>
              <div className="w-1/2 max-w-lg bg-white rounded-2xl border-t-2 border-r-2 border-b-8 border-l-2 border-tgi-amber p-8">
                <h5 className="text-2xl text-tgi-green font-bold mb-4">Board Manual</h5>
                <div>Download Link</div>
              </div>
            </div>
            <div className="max-w-prose mx-auto">
              <div className="bg-white rounded-2xl border-t-2 border-r-2 border-b-8 border-l-2 border-tgi-amber p-8">
                <h5 className="text-2xl text-tgi-green font-bold mb-4">
                  Pengelolaan Whistleblowing System (WBS)
                </h5>
                <div className="prose">
                  <p>
                    Whistleblowing System adalah sistem yang disiapkan sebagai sarana bagi pegawai
                    dan stakeholder lainnya untuk menyampaikan saran, pertanyaan serta laporan
                    indikasi pelanggaran etika bisnis. Kelengkapan media penyampaian untuk
                    Whistleblowing System yang dimiliki Perseroan yaitu sebagai berikut:
                  </p>
                  <p>
                    Email ke alamat ethics@tgi.co.id
                    <br />
                    Kotak Pos PO BOX No. 3897 JKP 10038
                    <br />
                    Pengiriman surat yang ditujukan ke Departemen RMCG dan atau
                    <br />
                    Telepon ke Departemen RMCG (021) 50852000 Ext. 72000 dan 72001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hsse" className="py-24 scroll-mt-24 bg-white">
          <div className="container max-w-screen-xl px-8 mx-auto">
            <div className="flex gap-x-12">
              <div className="w-1/2">
                <div className="prose text-justify">
                  <h2 className="text-4xl text-left font-bold text-tgi-darkblue mb-6">
                    Health Safety Security & Environment (HSSE)
                  </h2>
                  <p>
                    Mengingat kegiatan usahanya berkaitan erat dengan keberadaan gas bumi, yang
                    memiliki sifat sangat mudah terbakar, TGI berkomitmen penuh untuk menerapkan
                    sistem manajemen keselamatan dan kesehatan kerja yang diakui oleh otoritas
                    nasional maupun internasional. Untuk itu TGI menerapkan standar operasional
                    terkait aspek K3 dengan standar bersertifikasi internasional ISO 45001:2018
                    sebagai pengganti dari OHSAS 18001:2007. Dari sisi pengelolaan fasilitas
                    operasional, TGI juga menerapkan kebijakan pengelolaan objek vital dan strategis
                    sebagaimana ditetapkan oleh peraturan perundangan yang berlaku.. Sementara itu
                    dari sisi internal, TGI telah menerapkan dan terus-menerus mensosialisasikan
                    butir-butir Kebijakan K3 yang ditetapkan oleh Direksi Perseroan, sebagai
                    berikut:
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  className="rounded-[24px] border-4 border-solid border-tgi-amber"
                  src="/static/images/tgi-hsse.jpg"
                  alt=""
                  width={843}
                  height={548}
                  priority
                />
              </div>
            </div>
            <div className="flex gap-x-12 mt-12">
              <div className="w-1/2">
                <div className="prose text-justify">
                  <h2 className="text-3xl text-left font-bold text-tgi-darkblue mb-6">
                    Aspek Pengamanan
                  </h2>
                  <p>
                    Sebagai salah satu Obyek Vital Nasional (OBVITNAS) sesuai dengan Keputusan
                    Menteri Energi dan Sumber Daya Mineral No. 77 K/90/MEM/2019 tentang Objek Vital
                    Nasional Bidang Energi dan Sumber Daya Mineral, maka Perusahaan aktif dalam
                    melakukan pengaman baik oleh pegawai Perusahaan maupun oleh personel satuan
                    pengaman yang menjaga seluruh fasilitas Perusahaan termasuk keamanan jalur pipa
                    gas. Perusahaan melakukan pengamanan secara terpadu dengan pihak terkait guna
                    mendeteksi, menangkal, mencegah, dan menindak berbagai bentuk potensi gangguan,
                    ambang gangguan, dan gangguan nyata di bidang Kamtibmas di lingkungan
                    perusahaan. Perusahaan juga bekerja sama dengan PAMOBVIT di masing- masing POLDA
                    untuk bertukar informasi dan mendapatkan bantuan pengamanan sesuai dengan
                    kebutuhan Perusahaan.
                  </p>
                  <p>
                    Untuk memastikan sistem pengamanan berjalan dengan baik sesuai dengan standar
                    pengamanan OBVITNAS maka Perusahaan melakukan audit keamanan internal secara
                    berkala dengan melakukan penilaian kerentanan keamanan (SVA) terhadap fasilitas
                    perusahaan. Pada tahun 2021 dilakukan SVA terhadap fasilitas Station Metering
                    Tempino- Jambi dan Station Metering Panaran – Batam.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="prose text-justify">
                  <h2 className="text-3xl text-left font-bold text-tgi-darkblue mb-6">
                    Aspek Pengelola Lingkungan
                  </h2>
                  <p>
                    Kegiatan penyaluran gas bumi melalui yang dilakukan perusahaan telah mendapatkan
                    Izin Lingkungan dari Kementerian Lingkungan Hidup dan Kehutanan Republik
                    Indonesia. Sesuai dengan ketentuan dan penjelasan pada surat izin lingkungan,
                    pemilik usaha dan/atau kegiatan secara berkala (semester) diwajibkan untuk
                    melaksanakan pemantauan atau monitoring terhadap penerapannya.
                  </p>
                  <p>
                    Selanjutnya, untuk memenuhi peraturan perundangan di bidang lingkungan tersebut,
                    maka perusahaan menyusun dokumen pelaksanaan Rencana Pengelolaan Lingkungan
                    Hidup (RKL) dan Rencana Pemantauan Lingkungan Hidup (RPL). RKL-RPL dilakukan
                    untuk memantau penerapan/ pelaksanaan dokumen lingkungan yang telah disetujui
                    dan disahkan oleh Kementerian Lingkungan Hidup. RKL-RPL dilaksanakan 2 kali
                    setiap tahun, dimana hasil dari RKL-RPL tersebut dilaporkan kepada Kementrian
                    Lingkungan Hidup, Direktorat Jenderal Minyak dan Gas Bumi, Dinas Lingkungan
                    Hidup Provinsi, dan Dinas Lingkungan Hidup Kabupatan/Kota yang dilalui oleh pipa
                    gas milik perusahaan.
                  </p>
                  <p>
                    Selain RKL-RPL perusahaan juga aktif dilakukan melakukan pengelolahan limbah
                    baik limbah domestik maupun limbah Bahan Berbahaya dan Beracun (B3) untuk
                    mencegah dan menanggulangi pencemaran atau kerusakan lingkungan hidup yang
                    diakibatkan oleh limbah domestik maupun limbah B3. Selama Tahun 2021 tidak
                    ditemukan adanya pencemaran lingkungan dalam kegiatan operasional perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="csr" className="py-24 scroll-mt-24 bg-slate-100">
          <div className="container max-w-screen-xl px-8 mx-auto">
            <div className="flex">
              <div className="w-1/2 prose text-justify">
                <h2 className="text-4xl text-left font-bold text-tgi-darkblue mb-6">
                  Corporate Social Responsibility (CSR)
                </h2>
              </div>
            </div>
            <div className="flex gap-x-12">
              <div className="w-1/2">
                <div className="prose text-justify">
                  <p>
                    TGI berkomitmen penuh untuk menjalankan program Tanggung Jawab Sosial dan
                    Kemasyarakatan sebagaimana diatur dalam Undang-undang No. 40 Tahun 2007 tentang
                    Perseroan Terbatas. Aturan perundang-undangan tersebut kini telah deperkuat
                    dengan keluarnya peraturan pemerintah No. 47 tahun 2012 tentang tanggung tawab
                    sosial dan lingkungan bagi perseroan terbatas mewajibkan seluruh perusahaan yang
                    menjalankan kegiatan usahanya di bidang dan/atau berkaitan dengan sumber daya
                    alam untuk melaksanakan kegiatan tanggung jawab sosial dan lingkungan.
                  </p>
                  <p>
                    Perseroan mewujudkan Tanggung Jawab Sosial Kemasyarakatan melalui beragam
                    kegiatan dalam wadah Tanggung Jawab Sosial Perusahaan (Corporate Social
                    Reponsibility/CSR) yang dilaksanakan sebagai salah satu strategi Perseroan untuk
                    mencapai pertumbuhan berkelanjutan yang berkualitas sekaligus sebagai investasi
                    jangka panjang untuk mendukung pencapaian 17 rumusan pembangunan keberlanjutan
                    dalam Sustainable Development Goals (SDGs).
                  </p>
                </div>
                <div className="prose text-justify mt-12">
                  <h2 className="text-3xl text-left font-bold text-tgi-darkblue mb-6">
                    Kebijakan, Tujuan, Visi dan Misi CSR TGI
                  </h2>
                  <p>
                    Sebagai wujud dari komitmen Perusahaan untuk melaksanakan program CSR yang
                    berkualitas, TGI telah menetapkan kebijakan operasional, menetapkan tujuan dan
                    merumuskan, visi serta misi pelaksanaan program CSR dimaksud.
                  </p>
                  <p>Tujuan strategis pelaksanaan program CSR Perseroaan adalah:</p>
                  <ul>
                    <li>Keamanan Operasional.</li>
                    <li>Peningkatan Kualitas Hidup.</li>
                    <li>Pemberdayaan Masyarakat.</li>
                  </ul>
                  <p>
                    Untuk mencapainya, Perseroan kemudian menetapkan Visi dan Misi pelaksanaan CSR
                    TGI, sebagai berikut:
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  className="rounded-[24px] border-4 border-solid border-tgi-amber"
                  src="/static/images/about-img-01.jpg"
                  alt=""
                  width={843}
                  height={548}
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 xl:gap-12 2xl:gap-16 mt-12">
              <div className="bg-white rounded-2xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-darkblue p-8">
                <h5 className="text-2xl text-tgi-darkblue font-bold mb-4">Visi CSR</h5>
                <div className="prose prose-xl">
                  Menjadi pengelola CSR yang selalu bersinergi dengan masyarakat dalam rangka
                  memberikan kontribusi positif untuk menjaga harmonisasi Perusahaan dan lingkungan.
                </div>
              </div>
              <div className="col-span-2 bg-white rounded-2xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-darkblue p-8">
                <h5 className="text-2xl text-tgi-darkblue font-bold mb-4">Misi CSR</h5>
                <div className="prose max-w-none">
                  <ul>
                    <li>
                      Membina kerjasama yang baik dan saling menguntungkan dengan pemerintah daerah
                      maupun pemerintah pusat dan pihak terkait dalam aktivitas pengembangan
                      masyarakat.
                    </li>
                    <li>
                      Menjadikan Perusahaan berkontribusi bagi daerah dan kebudayaan masyarakat
                      sekitar wilayah operasinya.
                    </li>
                    <li>
                      Membantu masyarakat dalam peningkatan taraf hidupnya melalui pengembangan
                      manusia dan sumber daya alamnya.
                    </li>
                    <li>
                      Membangun rasa memiliki masyarakat di sekitar wilayah operasi terhadap
                      Perusahaan.
                    </li>
                    <li>
                      Memastikan implementasi dari kegiatan CSR yang dilakukan sesuai dengan
                      peraturan perundangan, kebijakan dan prosedur perusahaan yang berlaku serta
                      kode perilaku.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex mt-12">
              <div className="w-1/2 prose text-justify">
                <h2 className="text-3xl text-left font-bold text-tgi-darkblue mb-6">
                  Lima Pilar Program CSR TGI
                </h2>
              </div>
            </div>
            <div className="flex gap-x-12">
              <div className="w-1/2">
                <div className="prose text-justify">
                  <p>
                    Agar seluruh program yang dilaksanakan memberikan hasil optimal, Perseroan
                    senantiasa melibatkan partisipasi pemerintah, lembaga swadaya maupun tokoh
                    masyarakat sebagai mitra dalam menyusun dan merancang program yang dijalankan,
                    agar sesuai dengan kebutuhan. Masyarakat sekitar, sebagai penerima manfaat
                    program, dilibatkan dalam seluruh proses tersebut, agar mereka menjadi bagian
                    dari program yang dilaksanakan, tidak hanya sebagai obyek dari program.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="prose text-justify">
                  <p>
                    Untuk memudahkan proses perencanaan, pelaksanaan dan evaluasi program, Perseroan
                    kemudian menetapkan Lima Pilar Program CSR TGI sebagai acuan dalam melaksanakan
                    kegiatan pemberdayaan masyarakat sekitar, sebagai berikut.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <Image
                className="rounded-[24px] border-4 border-solid border-tgi-amber"
                src="/static/images/tgi-lima-pillar-csr.jpg"
                alt=""
                width={1920}
                height={700}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
