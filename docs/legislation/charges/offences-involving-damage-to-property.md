# Offences Involving Damage to Property 
<div class="charges-container">

  <!-- Burglary -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Burglary (FELONY)</div>
      <div class="charge-row principal">Principal - 12 months - $450</div>
      <div class="charge-row accomplice">Accomplice - 12 months - $450</div>
      <div class="charge-row accessory">Accessory - 10 months - $400</div>
      <div class="charge-description">
        <strong>Description:</strong>
        Unlawfully entering a building or property with the intent to commit theft, felony, or other criminal act.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>The defendant entered a building, property, or structure.</li>
          <li>The entry was unauthorized or without consent.</li>
          <li>There was intent to commit theft, felony, or another crime upon entry.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Felony Trespassing -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Felony Trespassing (FELONY)</div>
      <div class="charge-row principal">Principal - 12 months - $450</div>
      <div class="charge-row accomplice">Accomplice - 12 months - $450</div>
      <div class="charge-row accessory">Accessory - 10 months - $400</div>
      <div class="charge-description">
        <strong>Description:</strong>
        Entering or remaining on private property in a manner that escalates the offense to a felony, often due to intent to commit a crime or prior warnings.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>The defendant entered or stayed on private property.</li>
          <li>The entry was unauthorized or after warnings to leave.</li>
          <li>The trespass involved intent to commit a felony or was repeated after prior offenses.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Arson -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Arson (FELONY)</div>
      <div class="charge-row principal">Principal - 21 months - $950</div>
      <div class="charge-row accomplice">Accomplice - 21 months - $950</div>
      <div class="charge-row accessory">Accessory - 17 months - $760</div>
      <div class="charge-description">
        <strong>Description:</strong>
        Intentionally setting fire to property, buildings, or land without legal justification.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>The defendant caused or attempted to cause a fire.</li>
          <li>The fire was set intentionally or with reckless disregard for safety.</li>
          <li>The fire damaged property or posed risk to people or structures.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Trespassing -->
  <div class="charge misdemeanor">
    <div class="misdemeanor"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Trespassing (MISDEMEANOR)</div>
      <div class="charge-row principal">Principal - 5 months - $170</div>
      <div class="charge-row accomplice">Accomplice - 5 months - $170</div>
      <div class="charge-row accessory">Accessory - 4 months - $140</div>
      <div class="charge-description">
        <strong>Description:</strong>
        Entering or remaining on property without permission, but not rising to felony severity.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>The defendant entered or remained on another person’s property.</li>
          <li>The entry was unauthorized or against the owner’s instructions.</li>
          <li>The act did not involve intent to commit a more serious crime.</li>
        </ul>
      </div>
    </div>
  </div>

</div>


<style>

.charges-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
}

.charge {
  width: 270px;
  height: 270px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #3b3b3b;
  box-shadow: 0 0 6px rgba(0,0,0,0.4);
}

.felony {
  height: 5px;
  width: 100%;
}

.charge.capital .felony { background-color: #b95759; box-shadow: 0 0 4px #b95759; }
.charge.felony-charge .felony { background-color: #ddcd65; box-shadow: 0 0 4px #ddcd65; }
.charge.misdemeanor .felony { background-color: #35c1a4; box-shadow: 0 0 4px #35c1a4; }

.charge-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* allows scrolling if content is long */
  padding: 8px;
}

/* optional - adds a scrollbar style for dark theme */
.charge-content::-webkit-scrollbar {
  width: 6px;
}
.charge-content::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 3px;
}
.charge-content::-webkit-scrollbar-thumb:hover {
  background: #777;
}

.charge-description {
  text-align: left;
  font-size: 12px;
  line-height: 1.4;
  color: #ddd;
  margin-top: 8px;
}

.charge-description strong {
  color: #fff;
  display: block;
  margin-bottom: 3px;
}

.charge-description ul {
  padding-left: 18px;
  margin: 6px 0 0;
}

.charge-description li {
  margin-bottom: 4px;
}




.charge-row {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  word-wrap: break-word;
}

.charge-name { font-weight: bold; font-size: 14px; }
.principal { background-color: #f40505ff; }
.accomplice { background-color: #e75d07ff; }
.accessory { background-color: #0b846cff; }
</style>