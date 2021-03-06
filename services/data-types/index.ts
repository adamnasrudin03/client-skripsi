/* eslint-disable camelcase */
export interface AjaranTypes {
    _id: string;
    startYear: string;
    endYear: string;
    semester: string;
    startAt: string;
    endAt: string;
}
export interface RequestPengajuanType {
    npm: string;
    nama: string;
    email: string;
    lanjutan: boolean;
    semester: string;
    no_wa: string;
    judul_skripsi: string;
    tema_skripsi: string;
    file_proposal: string;
    file_rekap_nilai: string;
    dosen_sebelum: string;
    dosen_sebelum2: string;
    ajaran: string;
    mata_kuliah_lain: string;
}

export interface ResponsePengajuanTypes {
    message?: string;
    data: {
        _id: string;
        npm: string;
        nama: string;
        email: string;
        lanjutan: boolean;
        semester: string;
        no_wa: string;
        judul_skripsi: string;
        tema_skripsi: string;
        status: string;
        file_proposal: string;
        file_rekap_nilai: string;
        dosen_sebelum: string;
        ajaran: string;
        created_at: string;
        updated_at: string;
    }
}
