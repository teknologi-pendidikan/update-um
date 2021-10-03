const fetch = require("cross-fetch");
const chalk = require("chalk");

// eslint-disable-next-line no-console
const log = console.log;

const domainlist = [
  "um.ac.id",
  "bakpik.um.ac.id;",
  "berkarya.um.ac.id;",
  "buk.um.ac.id;",
  "hosting.um.ac.id;",
  "kemahasiswaan.um.ac.id;",
  "kliping.um.ac.id;",
  "komunikasi.um.ac.id;",
  "lab.pancasila.um.ac.id;",
  "lp2m.um.ac.id",
  "lp3.um.ac.id",
  "oia.um.ac.id",
  "p2lp.um.ac.id",
  "peraturan.um.ac.id",
  "piu-idb.um.ac.id",
  "pkbi.um.ac.id",
  "ppg.um.ac.id",
  "ppl.um.ac.id",
  "probis.um.ac.id",
  "psg15.um.ac.id",
  "ptik.um.ac.id",
  "pusatbisnis.um.ac.id",
  "senat.um.ac.id",
  "spi.um.ac.id",
  "suara.um.ac.id",
  "whistleblower.um.ac.id",
  "swarapendidikan.um.ac.id",
  "galeri.um.ac.id",
  "ika.um.ac.id",
  "kinerja.um.ac.id",
  "kunjungansekolah.um.ac.id",
  "mooc.um.ac.id",
  "museum.um.ac.id",
  "ppid.um.ac.id",
  "ult.um.ac.id",
  "vokasi.um.ac.id",
  "awardee.lpdp.um.ac.id",
  "kerjasama.um.ac.id",
  "spm.um.ac.id",
  "tpp.um.ac.id",
  "unitarsip.um.ac.id",
  "pilrek.um.ac.id",
  "pemira.um.ac.id",
  "humas.um.ac.id",
  "sastra.um.ac.id",
  "fip.um.ac.id",
  "fik.um.ac.id",
  "fppsi.um.ac.id",
  "fe.um.ac.id",
  "ft.um.ac.id",
  "fmipa.um.ac.id",
  "tep.fip.um.ac.id",
  "ap.fip.um.ac.id",
  "bk.fip.um.ac.id",
  "ksdp.fip.um.ac.id",
  "paud.fip.um.ac.id",
  "pgsd.fip.um.ac.id",
  "plb.fip.um.ac.id",
  "pls.fip.um.ac.id",
  "kkm3.ksdp.fip.um.ac.id",
  "e-learning.fip.um.ac.id",
  "kkm3.paud.fip.um.ac.id",
  "kkm3.pgsd.fip.um.ac.id",
  "arab.sastra.fip.um.ac.id",
  "inggris.sastra.fip.um.ac.id",
  "jerman.sastra.fip.um.ac.id",
  "jsi.sastra.fip.um.ac.id",
  "mandarin.sastra.fip.um.ac.id",
  "sedesa.sastra.fip.um.ac.id",
  "bb.sastra.fip.um.ac.id",
  "bipa.sastra.fip.um.ac.id",
  "mbatik.sedesa.sastra.fip.um.ac.id",
  "mtqsn.fs.um.ac.id",
  "creativolution.sastra.fip.um.ac.id",
  "fip.um.ac.id",
  "ik.fik.um.ac.id",
  "akutansi.fe.um.ac.id",
  "bem.fe.um.ac.id",
  "manajemen.fe.um.ac.id",
  "labmanajemen.fe.um.ac.id",
  "adp.fe.um.ac.id",
  "ekp.fe.um.ac.id",
  "jpc.fe.um.ac.id",
  "lp3me.fe.um.ac.id",
  "tpp.fe.um.ac.id",
  "tlc-taxcenter.fe.um.ac.id",
  "ttn.fe.um.ac.id",
  "ruangkampus.fe.um.ac.id",
  "studikelayakan.fe.um.ac.id",
  "emas.ft.um.ac.id",
  "industri.ft.um.ac.id",
  "mesin.ft.um.ac.id",
  "sipil.ft.um.ac.id",
  "iro.ft.um.ac.id",
  "job.ft.um.ac.id",
  "biologi.fmipa.um.ac.id",
  "kimia.fmipa.um.ac.id",
  "fisika.fmipa.um.ac.id",
  "ilmuhayat.fmipa.um.ac.id",
  "mat.fmipa.um.ac.id",
  "matematika.um.ac.id",
  "ipa.fmipa.um.ac.id",
  "lab.fisika.fmipa.um.ac.id",
  "central-laboratory.fmipa.um.ac.id",
  "e-learning.fmipa.um.ac.id",
  "herbmalg.fmipa.um.ac.id",
];

const activedomain = [];

domainlist.map(domain => {
  fetch(`http://${domain}`)
    .then(res => {
      if (res.status === 200) {
        log(chalk.green(`${domain} is available`));
        activedomain.push(domain);
      } else {
        log(chalk.red(`${domain} is unavailable`));
      }
    })
    .catch(err => {
      log(chalk.red(err));
    });
  return null;
});
