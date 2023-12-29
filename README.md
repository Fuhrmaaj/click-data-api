# click-data-api

An API between CLICK PLCs and data interpreters

#### Video Demo: <URL HERE>

#### Description:

This program is an MVP proof-of-concept to demonstrate the possibilities for PLC data logging.

AutomationDirect <https://www.automationdirect.com/adc/home/home> produces a line of PLCs for automation and industrial controls under the CLICK brand. These PLCs can output their data view to a .cdv file, but this file type cannot be read by most programs. Industrial controls software is currently only available for Windows operating systems.

The CLICK Data API currently does three things:

1. It will convert the data to a .csv format so that it can be read by the controls technician.

2. Data logging is typically only available with the purchase and installation of a Human-Machine Interface, costing roughly $500 CAD. If the only interest of the factory is data logging, then money can be saved on an HMI.

3. The C-More EA9 headless HMI can only log 16 trends, due to storage limitations with industrial systems. The CLICK Data API will allow controls technicians to potentially log an unlimited amount of data within a factory by tasking the PLC to log to the data view, then exporting the data view to a .cdv, then running this program to add the data to their server. This means the factory will not need to buy and configure additional HMIs if logging data is the only concern.

#### How to use this program:

Put any file you wish to convert into /click-data-api/log_data

Run
npm run start

You will be prompted to type the name of the file you wish to convert (it is not necessary to type ".cdv").

You will then be prompted to name the output file. Only type the filename without the file extension (ie. Do not put ".csv" at the end of your filename).
