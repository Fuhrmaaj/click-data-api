# CLICK-Data-API

This is a command-line tool which converts PLC data to be readable by a personal computer and unlocks data logging capabilities. Hit the project with a star if you find it useful! :star:

### Why?

PLCs are the industrial standard automation devices, but are only accessible in limited ways through proprietary software. CLICK PLCs manufactured by [AutomationDirect]<https://www.automationdirect.com/adc/home/home> are favoured by small business because they are significantly cheaper and their programming software is free, rather than subscription-based. `CLICK Data API` is a tool which allows you to convert data exported by the PLC's Data View into a format which can be read by office programs such as Microsoft Excel, Google Sheets, or even Notepad!

The standard method of data logging and collection is to buy expensive HMI (Human-Machine Interface) modules, or buy subscription HMI software. The most basic versions of these are over $500 and only log 16 data trends. This tool will allow a control technician to log an amount of data only limited by the amount of memory in their PLCs - all completely free!

### How to use this program:

Put any file you wish to convert into /click-data-api/log_data

Then navigate to the program's directory in the terminal and type

`npm run start`

You will be prompted to type the name of the file you wish to convert (it is not necessary to type ".cdv").

You will then be prompted to name the output file. Only type the filename without the file extension (ie. Do not put ".csv" at the end of your filename).

### Contributing

#### Clone the repo

```bash
git clone https://github.com/Fuhrmaaj/click-data-api.git
cd click-data-api
```

#### Build and run the project

Prepare data by exporting it from the CLICK PLC data view and placing it into /click-data-api/log_data

Then:

```bash
npm run start
```
