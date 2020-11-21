export default class Content {

    private temperatura: string = "0";
    private luminosidade: string = "0";
    private umidade: string = "0";
    private current_color: string = "0";
    private status_buzzer: string = "0";
    private maxTemp: string = "0";
    private minTemp: string = "0";
    private maxLum: string = "0";
    private minLum: string = "0";
    private maxUmid: string = "0";
    private minUmid: string = "0";


    constructor(
        temperatura: string,
        luminosidade: string,
        umidade: string,
        current_color: string,
        status_buzzer: string,
        maxTemp: string,
        minTemp: string,
        maxLum: string,
        minLum: string,
        maxUmid: string,
        minUmid: string) {
        this.temperatura = temperatura;
        this.luminosidade = luminosidade;
        this.umidade = umidade;
        this.maxTemp = maxTemp;
        this.maxLum = maxLum;
        this.maxUmid = maxUmid;
        this.minTemp = minTemp;
        this.minLum = minLum;
        this.minUmid = minUmid;
        this.current_color = current_color;
        this.status_buzzer = status_buzzer;
    }


    /**
     * Getter $current_color
     * @return {string }
     */
    public get $current_color(): string {
        return this.current_color;
    }

    /**
     * Getter $status_buzzer
     * @return {string }
     */
    public get $status_buzzer(): string {
        return this.status_buzzer;
    }

    /**
     * Getter $maxTemp
     * @return {string }
     */
    public get $maxTemp(): string {
        return this.maxTemp;
    }

    /**
     * Getter $minTemp
     * @return {string }
     */
    public get $minTemp(): string {
        return this.minTemp;
    }

    /**
     * Getter $maxLum
     * @return {string }
     */
    public get $maxLum(): string {
        return this.maxLum;
    }

    /**
     * Getter $minLum
     * @return {string }
     */
    public get $minLum(): string {
        return this.minLum;
    }

    /**
     * Getter $maxUmid
     * @return {string }
     */
    public get $maxUmid(): string {
        return this.maxUmid;
    }

    /**
     * Getter $minUmid
     * @return {string }
     */
    public get $minUmid(): string {
        return this.minUmid;
    }

    /**
     * Setter $current_color
     * @param {string } value
     */
    public set $current_color(value: string) {
        this.current_color = value;
    }

    /**
     * Setter $status_buzzer
     * @param {string } value
     */
    public set $status_buzzer(value: string) {
        this.status_buzzer = value;
    }

    /**
     * Setter $maxTemp
     * @param {string } value
     */
    public set $maxTemp(value: string) {
        this.maxTemp = value;
    }

    /**
     * Setter $minTemp
     * @param {string } value
     */
    public set $minTemp(value: string) {
        this.minTemp = value;
    }

    /**
     * Setter $maxLum
     * @param {string } value
     */
    public set $maxLum(value: string) {
        this.maxLum = value;
    }

    /**
     * Setter $minLum
     * @param {string } value
     */
    public set $minLum(value: string) {
        this.minLum = value;
    }

    /**
     * Setter $maxUmid
     * @param {string } value
     */
    public set $maxUmid(value: string) {
        this.maxUmid = value;
    }

    /**
     * Setter $minUmid
     * @param {string } value
     */
    public set $minUmid(value: string) {
        this.minUmid = value;
    }


    /**
     * Getter $umidade
     * @return {string }
     */
    public get $umidade(): string {
        return this.umidade;
    }

    /**
     * Setter $umidade
     * @param {string } value
     */
    public set $umidade(value: string) {
        this.umidade = value;
    }


    /**
     * Getter $luminosidade
     * @return {string }
     */
    public get $luminosidade(): string {
        return this.luminosidade;
    }

    /**
     * Setter $luminosidade
     * @param {string } value
     */
    public set $luminosidade(value: string) {
        this.luminosidade = value;
    }


    /**
     * Getter $temperatura
     * @return {string }
     */
    public get $temperatura(): string {
        return this.temperatura;
    }

    /**
     * Setter $temperatura
     * @param {string } value
     */
    public set $temperatura(value: string) {
        this.temperatura = value;
    }
}