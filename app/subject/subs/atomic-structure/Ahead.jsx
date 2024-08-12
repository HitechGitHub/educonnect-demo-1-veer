import React from 'react'

const Ahead = () => {
  return (
    <div>
      <div class="bg-gray-800 border border-gray-600 dark:border-gray-700 mt-10 rounded-lg p-8 max-w-full w-[80vw]">
    <h1 class="text-3xl font-bold text-green-400 mb-6 text-center">🌟 Rutherford's Gold Foil Experiment 🌟</h1>
    <ul class="list-disc list-inside space-y-4">
        <li class="flex items-start">
            <span class="text-green-400 text-xl mr-2">🔹</span>
            <div>
                <strong class="text-green-300">Empty Space in Atom:</strong>
                <p>Most α-particles passed straight through the gold foil without any deflection, which meant that there was a lot of empty space in an atom.</p>
            </div>
        </li>
        <li class="flex items-start">
            <span class="text-green-400 text-xl mr-2">🔹</span>
            <div>
                <strong class="text-green-300">Presence of Nucleus:</strong>
                <p>A few α-particles were deflected through small angles, which meant that there was a positively charged region present in the atom that caused deflection. Rutherford called this positively charged region the nucleus of the atom.</p>
            </div>
        </li>
        <li class="flex items-start">
            <span class="text-green-400 text-xl mr-2">🔹</span>
            <div>
                <strong class="text-green-300">Density and Mass:</strong>
                <p>Very few α-particles were deflected through large angles or bounced back, which meant that the nucleus is centrally located, dense, and occupies a very small space in the atom. The α-particles that directly hit the nucleus bounced back. Since α-particles which were comparatively denser were deflected by the nucleus, Rutherford concluded that almost the whole mass of the atom must be present in the nucleus.</p>
            </div>
        </li>
    </ul>
</div>

    </div>
  )
}

export default Ahead
