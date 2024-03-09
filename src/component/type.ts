export type GuestProps = {
    useInfo: (type: 'success'|'warn'|'error', title: string, text: string)=> void
}

export type HeaderProps = {
    useView: (directory: 'Startseite'|'Hersteller'|'Bad'|'Cuhen'|'Gästebuch'|'Team'|'Impressum'|'Kontakt')=> void
}

export type AddComentProps = {
    useInfo: (type: 'success'|'warn'|'error', title: string, text: string)=> void
    path: 'laufApiContact'|'laufApiComment'
}