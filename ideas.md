# Questions to ask?

## Sunshine Coast Council

question= Should I take my dog on a walk near Sugar Bag Road around 4pm or will there be too many car? 
datasets = {
    unity_water_mid-field_monitoring_data: [Date Sample Collected,Time Sample Collected,Temperature,Dissolved Oxygen,pH,E.Cond.,Secchi Depth,Salinity (Field),E. coli,Thermotolerant coliforms,Intestinal enterococci,Chlorophyll a,Chloro-a Phenophytin ratio,BOD5,Suspended Solids,Organic Carbon - Total,Ammonia as N,Nitrate + Nitrite as N,Phosphate as P,Total Nitrogen as N,Total Phosphorus as P,TKN as N (TN-NOX)],
    unity_water_estuarine_marine_data: [Location name,Lat (GDA94),Long (GDA94),Survey date,Depth (m),Chlorophyll a (ug/L),Secchi depth (metres),Total N (mg/L),Ammonia (mg/L),Organic N (mg/L),NOx (mg/L),DO (mg/L),DO saturation (%),pH (Unit),Pheopigments (ug/L),FRP (mg/L),Total P (mg/L),Salinity (g/L),Conductivity (mS/cm),Temp (deg C),Turbidity (NTU)],
    sunshine_coast_council_alpha_x: [datetime,F1 - peopleLeft/Up,F2 - peopleRight/Down,F3 - bikesLeft/Up,F4 - bikesRight/Down,F5 - carsLeft/Up,F6 - carsRight/Down,F7 - busesLeft/Up,F8 - busesRight/Down,F9 - trucksLeft/Up,F10 - trucksRight/Down,Total People,Total Bikes,Total Cars,Total Buses,Total Trucks],
    moreton_bay_council_SC_BOM: [name[80],local_date_time_full[80],aifstime_utc[80],lat,lon,apparent_t,cloud_base_m,cloud_oktas,cloud_type_id,delta_t,gust_kmh,gust_kt,air_temp,dewpt,press,press_msl,press_qnh,rain_trace[80],rel_hum,swell_height,swell_period,wind_dir[80],wind_spd_kmh,wind_spd_kt],
    moreton_bay_council_RedCliffe_BOM: [name[80],local_date_time_full[80],aifstime_utc[80],lat,lon,apparent_t,cloud_base_m,cloud_oktas,cloud_type_id,delta_t,gust_kmh,gust_kt,air_temp,dewpt,press,press_msl,press_qnh,rain_trace[80],rel_hum,swell_height,swell_period,wind_dir[80],wind_spd_kmh,wind_spd_kt]
    }

of these {datasets} what does {question} best fit.

Within this dataset, which of the column/s in datasets[dataset[column]] would help answer the {question}?

Of these columns generate a some code which takes the data from the csv file.

Of these columns generate a query to get the data from the database

## Governance

how has the water quality changed at `location`between `date1` and `date2`?

This has been the water quality at `location` between `date1` and `date2` and this has been the weather at `location` between `date1` and `date2`. **Suggest a trend between both sets of data.**

## People

Should I go swimming at `river` if `Weather Event`?

recent summary of water quality at `river`, and the weather at `river`. Identify trend between both to see if you should go swimming at `river`

Should I go mountain biking at `sugar bag road` if it has been `raining`?

summary of track quality and weather to see if there is correlation between track erosion and weather
