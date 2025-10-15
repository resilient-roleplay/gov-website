# Offences Involving Theft

<div class="charges-container">

  <!-- Possession of Contraband in the First Degree -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Possession of Contraband in the First Degree</div>
      <div class="charge-row principal">Principal - 14 months - $530</div>
      <div class="charge-row accomplice">Accomplice - 12 months - $400</div>
      <div class="charge-row accessory">Accessory - 10 months - $300</div>
      <div class="charge-description">
        <strong>Description:</strong> Possessing illegal or prohibited substances/items of high severity.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant knowingly possessed contraband classified as first-degree.</li>
          <li>Possession occurred without legal authorization.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- First Degree Robbery -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">First Degree Robbery</div>
      <div class="charge-row principal">Principal - 30 months - $1,350</div>
      <div class="charge-row accomplice">Accomplice - 30 months - $1,350</div>
      <div class="charge-row accessory">Accessory - 24 months - $1,000</div>
      <div class="charge-description">
        <strong>Description:</strong> Using force or threat to steal property in the first-degree category.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant intentionally took property from another by force or threat.</li>
          <li>The act constituted first-degree severity (e.g., armed, high-value target).</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Possession of Dirty Money in the First Degree -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Possession of Dirty Money in the First Degree</div>
      <div class="charge-row principal">Principal - 21 months - $800</div>
      <div class="charge-row accomplice">Accomplice - 18 months - $650</div>
      <div class="charge-row accessory">Accessory - 15 months - $500</div>
      <div class="charge-description">
        <strong>Description:</strong> Holding money obtained through illegal activities, first-degree severity.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant knowingly possessed funds obtained illegally.</li>
          <li>The value or context qualifies as first-degree.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Theft of a Commercial Aircraft -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Theft of a Commercial Aircraft</div>
      <div class="charge-row principal">Principal - 23 months - $870</div>
      <div class="charge-row accomplice">Accomplice - 23 months - $870</div>
      <div class="charge-row accessory">Accessory - 23 months - $710</div>
      <div class="charge-description">
        <strong>Description:</strong> Unauthorized taking of a commercial aircraft.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant unlawfully took possession of a commercial aircraft.</li>
          <li>The act was without consent of the owner or operator.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Theft of an Aircraft -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Theft of an Aircraft</div>
      <div class="charge-row principal">Principal - 19 months - $720</div>
      <div class="charge-row accomplice">Accomplice - 19 months - $720</div>
      <div class="charge-row accessory">Accessory - 5 months - $500</div>
      <div class="charge-description">
        <strong>Description:</strong> Unauthorized taking of a non-commercial aircraft.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant knowingly took control of an aircraft without permission.</li>
          <li>The act constitutes theft under aircraft regulations.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Robbery of a Financial Institution -->
  <div class="charge felony-charge">
    <div class="felony"></div>
    <div class="charge-content">
      <div class="charge-row charge-name">Robbery of a Financial Institution</div>
      <div class="charge-row principal">Principal - 100 months - $10,000</div>
      <div class="charge-row accomplice">Accomplice - 100 months - $10,000</div>
      <div class="charge-row accessory">Accessory - 80 months - $8,500</div>
      <div class="charge-description">
        <strong>Description:</strong> Using force, threat, or intimidation to steal from a bank or financial institution.
        <br><br>
        <strong>Points to Prove:</strong>
        <ul>
          <li>Defendant intentionally used coercion to obtain money or property.</li>
          <li>The target was a recognized financial institution.</li>
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